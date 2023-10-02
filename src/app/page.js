import Header from '@/components/Header'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div className="w-screen h-screen grid lg:grid-cols-4 lg:grid-rows-2 lg:h-fit lg:w-[80%] px-6 gap-6">
      <Header />
      <Main />
    </div>
  )
}
