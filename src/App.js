import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {

  const [walletAddress, setWalletAddress] = useState(null)
    window.onload = async function () {
    try {
        if (window.solana) {
            const solana = window.solana
            if (solana.isPhantom) {
                console.log('Phantom wallet found')
                const res = await solana.connect({onlyIfTrusted: true})
                console.log('Connected with Public Key:', res.publicKey.toString())
                setWalletAddress(res.publicKey.toString())
            }
            } else {
            alert('Wallet not found! Get a Phantom Wallet')
            }
            } catch (error) {
            console.error(error)
        }
}

    const connectwallet = async() => {
        if (window.solana) {
            const solana = window.solana
            const res = await solana.connect()
            setWalletAddress(res.publicKey.toString())
        } else {
            alert ('Waller not Found! GeT a phantom Wallet')
        }
    }

    return (
        <div className="App">
            <header className="App-header">
            {!walletAddress && (
                <div>
                    <button clasName="btn" onClick={connectwallet}>
                    Honey Paji Connect Wallet
                    </button>
                </div>
            )}
            <div>
                <p>
                    Wallet address: {' '}
                    <span classname = "address"> {walletAddress}</span>
                </p>
            </div>
        </header>
    </div>
)
}
export default App