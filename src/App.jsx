
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css'

export default function App(){
  return (
    <div className='font-onest'>
      <Header/>
      <main className="min-h-screen container mx-auto py-4">
        <AppRoutes/>
      </main>
      <Footer/>
    </div>
  );
}

