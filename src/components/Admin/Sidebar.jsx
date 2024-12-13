import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  Users, 
  ShoppingCart, 
  Percent,
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const SidebarSection = ({ icon: Icon, title, items, sectionKey }) => {
    const isOpen = activeSection === sectionKey;

    return (
      <div className="mb-4">
        <div 
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Icon className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-800">{title}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>
        {isOpen && (
          <div className="pl-7 mt-2 space-y-2">
            {items.map((item, index) => (
              <Link 
                key={index} 
                to={`/admin/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-600 hover:text-blue-600 cursor-pointer hover:bg-blue-50 p-1 rounded-md transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const sidebarSections = [
    {
      icon: Home,
      title: 'Dashboard',
      sectionKey: 'dashboard',
      items: ['Overview', 'Analytics']
    },
    {
      icon: Package,
      title: 'Product',
      sectionKey: 'product',
      items: [
        'Category', 
        'Finishing', 
        'Bahan', 
        'All Product', 
        'Collection Product'
      ]
    },
    {
      icon: Users,
      title: 'User',
      sectionKey: 'user',
      items: [
        'All User', 
        'Cart', 
        'Wishlist'
      ]
    },
    {
      icon: Percent,
      title: 'Discount',
      sectionKey: 'discount',
      items: [
        'All Discount', 
        'Discount Usage'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Order',
      sectionKey: 'order',
      items: [
        'All Order', 
        'All Payment', 
        'All Shipping'
      ]
    }
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg p-4 overflow-y-auto">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
      </div>
      {sidebarSections.map((section, index) => (
        <SidebarSection 
          key={index} 
          icon={section.icon}
          title={section.title}
          items={section.items}
          sectionKey={section.sectionKey}
        />
      ))}
    </div>
  );
};

export default Sidebar;