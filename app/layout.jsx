import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share Ai Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='ko'>
        <div className='main'>
            <div className='gradient' />
        </div>
        <main className='app'>
            {children}
        </main>
    </html>
  )
}

export default RootLayout