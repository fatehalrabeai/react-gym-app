
import {Hero} from "./components/Hero.jsx";
import {Generator} from "./components/Generator.jsx";
import {Workout} from "./components/Workout.jsx";

function App() {

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to bg-slate-950 text-white text-sm sm:text-base">
            <Hero />
            <Generator />
            <Workout />
        </main>
    )
}

export default App
