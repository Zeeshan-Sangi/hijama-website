
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { useToast } from '@/components/ui/use-toast';
    import { Link } from 'react-router-dom';
    import { Plus, Trash2, Save, FileText } from 'lucide-react';

    const AdminPackages = () => {
      const { toast } = useToast();
      const [packages, setPackages] = useState([]);
      const [newFeatureInputs, setNewFeatureInputs] = useState({});

      useEffect(() => {
        (async () => {
          const storedPackages = JSON.parse(localStorage.getItem('hijamaPackages'));
          let cloud = null;
          try {
            const { fetchPackages } = await import('@/lib/firebase');
            cloud = await fetchPackages();
          } catch {}
          if (cloud && Array.isArray(cloud)) {
            setPackages(cloud);
            localStorage.setItem('hijamaPackages', JSON.stringify(cloud));
            return;
          }
          if (storedPackages) {
            setPackages(storedPackages);
          } else {
            const defaultPackages = [
              { name: "Package 1", title: "Standard", price: "£55", partialPayment: "£20", services: ["Health Consultation", "Massage", "Cupping", "Back/Head"]},
              { name: "Package 2", title: "Large", price: "£70", partialPayment: "£25", services: ["Health Consultation", "Massage", "Cupping", "Inversion", "Full Body"]},
              { name: "Package 3", title: "Dorn", price: "£80", partialPayment: "£30", services: ["Health Consultation", "Massage", "Cupping", "Inversion", "Deep Tissue", "Sports Massage", "Gua Sha Therapy"]}
            ];
            setPackages(defaultPackages);
            localStorage.setItem('hijamaPackages', JSON.stringify(defaultPackages));
          }
        })();
      }, []);

      const handlePriceChange = (packageName, newPrice) => {
        setPackages(packages.map(p => p.name === packageName ? { ...p, price: newPrice } : p));
      };

      const handlePartialPaymentChange = (packageName, newPartialPayment) => {
        setPackages(packages.map(p => p.name === packageName ? { ...p, partialPayment: newPartialPayment } : p));
      };

      const handleFeatureChange = (packageName, featureIndex, newValue) => {
        setPackages(packages.map(p => 
          p.name === packageName ? 
          {...p, services: p.services.map((s, i) => i === featureIndex ? newValue : s)} 
          : p
        ));
      };
      
      const handleNewFeatureInputChange = (packageName, value) => {
        setNewFeatureInputs({ ...newFeatureInputs, [packageName]: value });
      };

      const addFeature = (packageName) => {
        const newFeature = newFeatureInputs[packageName];
        if (!newFeature || !newFeature.trim()) return;
        setPackages(packages.map(p => 
          p.name === packageName ? 
          {...p, services: [...p.services, newFeature]} 
          : p
        ));
        setNewFeatureInputs({ ...newFeatureInputs, [packageName]: '' });
      };
      
      const deleteFeature = (packageName, featureIndex) => {
        setPackages(packages.map(p => 
          p.name === packageName ? 
          {...p, services: p.services.filter((_, i) => i !== featureIndex)} 
          : p
        ));
      };
      
      const savePackages = async () => {
        localStorage.setItem('hijamaPackages', JSON.stringify(packages));
        try {
          const { savePackages } = await import('@/lib/firebase');
          await savePackages(packages);
        } catch {}
        toast({ title: "Success!", description: "Packages have been updated successfully." });
      };

      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Manage Packages</h1>
              <p className="text-gray-500">Update pricing and features for packages</p>
            </div>
            <div className="flex gap-4">
              <Link to="/admin/packages/submissions" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:opacity-95 transition">
                <FileText size={20} className="mr-2" />
                View Submissions
              </Link>
              <button onClick={savePackages} className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:opacity-95 transition">
                <Save size={20} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-bold text-[#13aea1] mb-4">{pkg.title}</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input 
                    type="text"
                    value={pkg.price}
                    onChange={(e) => handlePriceChange(pkg.name, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] transition-shadow"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partial Payment Amount</label>
                  <input 
                    type="text"
                    value={pkg.partialPayment || ''}
                    onChange={(e) => handlePartialPaymentChange(pkg.name, e.target.value)}
                    placeholder="e.g., £20"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] transition-shadow"
                  />
                  <p className="text-xs text-gray-500 mt-1">Amount customer pays before booking confirmation</p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  <div className="space-y-2">
                    {pkg.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={service}
                          onChange={(e) => handleFeatureChange(pkg.name, index, e.target.value)}
                          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        <button onClick={() => deleteFeature(pkg.name, index)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors">
                          <Trash2 size={18}/>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Add New Feature</label>
                   <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={newFeatureInputs[pkg.name] || ''}
                        onChange={(e) => handleNewFeatureInputChange(pkg.name, e.target.value)}
                        placeholder="New feature..."
                        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"
                      />
                      <button onClick={() => addFeature(pkg.name)} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                        <Plus size={20}/>
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    };

    export default AdminPackages;
  