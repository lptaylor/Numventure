import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <Link href="/rules">
      <button>Go to the Rules Page</button>
    </Link>
      <h1>Welcome to Numventure</h1>
      <h2>The game of random number knowledge!</h2>
      <h4>Please visit the Rules page to find out how the game works!</h4>
  </div>
)

export default Index
