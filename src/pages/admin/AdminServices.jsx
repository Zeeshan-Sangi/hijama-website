
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useToast } from '@/components/ui/use-toast';
    import { Plus, Trash2 } from 'lucide-react';

    const AdminServices = () => {
      const { toast } = useToast();
      const [services, setServices] = useState([
        { id: 1, name: 'Hijama Cupping Therapy', description: 'Traditional body detoxification.' },
        { id: 2, name: 'Deep Tissue Massage', description: 'Targets deeper layers of muscle.' },
      ]);
      const [newServiceName, setNewServiceName] = useState('');
      const [newServiceDesc, setNewServiceDesc] = useState('');

      const addService = () => {
        if (!newServiceName.trim()) {
          toast({ title: "Error", description: "Service name cannot be empty.", variant: "destructive" });
          return;
        }
        const newService = {
          id: Date.now(),
          name: newServiceName,
          description: newServiceDesc,
        };
        setServices([...services, newService]);
        setNewServiceName('');
        setNewServiceDesc('');
        toast({ title: "Success!", description: "New service added." });
      };

      const deleteService = (id) => {
        setServices(services.filter(s => s.id !== id));
        toast({ title: "Service Removed", description: "The service has been deleted.", variant: "destructive" });
      };

      return (
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Manage Services</h1>
          <p className="text-gray-500 mb-8">Create, edit, and remove services</p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Service</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                placeholder="Service Name"
                value={newServiceName}
                onChange={e => setNewServiceName(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"
              />
              <input 
                type="text"
                placeholder="Service Description"
                value={newServiceDesc}
                onChange={e => setNewServiceDesc(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"
              />
              <button onClick={addService} className="bg-[#13aea1] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-[#0e8c81] transition-colors">
                <Plus size={20} className="mr-2"/>
                Add Service
              </button>
            </div>
          </motion.div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Existing Services</h2>
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <button onClick={() => deleteService(service.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors">
                    <Trash2 size={20}/>
                  </button>
                </div>
              ))}
              {services.length === 0 && <p className="text-center text-gray-500 py-4">No services yet. Add one above!</p>}
            </div>
          </div>
        </div>
      );
    };

    export default AdminServices;
  