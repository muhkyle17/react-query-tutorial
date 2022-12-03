import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'

import Characters from './components/Characters'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Characters />
        <p></p>
      </div>
    </QueryClientProvider>
  )
}

export default App
