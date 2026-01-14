export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400">
            GLM Orchestrator
          </h1>
          <p className="text-gray-400 mt-1">
            Real-time task monitoring dashboard
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Servers */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
              Active Servers
            </h2>
            <p className="text-gray-500 italic">No servers connected</p>
          </div>

          {/* Active Tasks */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
              Active Tasks
            </h2>
            <p className="text-gray-500 italic">No active tasks</p>
          </div>

          {/* Workflows */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
              Workflows
            </h2>
            <p className="text-gray-500 italic">No workflows</p>
          </div>
        </div>

        {/* History */}
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
            Task History
          </h2>
          <p className="text-gray-500 italic">No history yet</p>
        </div>
      </div>
    </main>
  );
}
