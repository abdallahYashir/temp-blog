import image from './assets/abdallah.png'
import './App.css'

function App() {

  return (
    <>
    <h1 className="text-4xl font-bold text-center">
        Hi, Welcome.
      </h1>

      <div className="flex flex-col items-center justify-center">
        <img
          src={image}
          alt="Abdallah Yashir Ramsing"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <div className="text-center">
        <p>
          My name is Abdallah Yashir Ramsing.
        </p>
        <p>My <a href="https://www.abdallahyashir.com/">Blog</a> is currently down.</p>
        <p>Currently  🚧</p>
      </div>

      <div className="text-center">
        <strong>You can meanwhile follow my work on:</strong>
        <ul className="flex flex-row justify-center">
          <li className="mx-2">
            <a href="https://www.linkedin.com/in/abdallah-yashir-ramsing-51a20782/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="mx-2">
            <a href="https://twitter.com/AbdallahRamsing" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li className="mx-2">
            <a href="https://abdallah-yashir.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a>
          </li>
          <li className="mx-2">
            <a href="https://www.youtube.com/channel/UCToIxwX31gz6ZHa1dOFshiA" target="_blank" rel="noopener noreferrer">YouTube</a>
          </li>
          <li className="mx-2">
            <a href="https://www.quora.com/profile/Abdallah-Yashir" target="_blank" rel="noopener noreferrer">Quora</a>
          </li>
          <li className="mx-2">
            <a href="https://dev.to/abdallahyashir" target="_blank" rel="noopener noreferrer">DevTo</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
