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
      <i className='shape2'></i>
      <style jsx>{`
        .shape2 {
          display:inline-block!important;
          width:75px;
          height:75px;
          background-color:#666666}
      `}</style>
  </div>
)

export default Index
