import React, { useState } from 'react'
import AiTest from '../Test/AiTest'
import ManualTest from '../Test/ManualTest'
import OutcomeBasedTest from '../Test/OutcomeBasedTest'

const Test = () => {

    const [activeTab, setActiveTab] = useState('ai');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  return (
      <>
            <div className="p-4">
        {/* Navigation Tabs */}
            <div className="flex space-x-4">
                <button
                className={`py-2 px-4 rounded-lg focus:outline-none ${activeTab === 'ai' ? 'bg-blue-500 dark:bg-gray-600 text-white' : 'dark:bg-indigo-700 bg-gray-300'}`}
                onClick={() => handleTabChange('ai')}
                >
                AI Test
                </button>
                <button
                className={`py-2 px-4 rounded-lg focus:outline-none ${activeTab === 'manual' ? 'bg-blue-500 dark:bg-gray-600 text-white' : 'dark:bg-indigo-700 bg-gray-300'}`}
                onClick={() => handleTabChange('manual')}
                >
                Manual Test
                </button>
                <button
                className={`py-2 px-4 rounded-lg focus:outline-none ${activeTab === 'outcome' ? 'bg-blue-500 dark:bg-gray-600 text-white' : 'dark:bg-indigo-700 bg-gray-300'}`}
                onClick={() => handleTabChange('outcome')}
                >
                Outcome-based Test
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === 'ai' && <AiTest />}
                {activeTab === 'manual' && <ManualTest />}
                {activeTab === 'outcome' && <OutcomeBasedTest />}
            </div>
            </div>

      </>
  )
}

export default Test