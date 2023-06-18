import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import Aboutcard from './Aboutcard';

const About = () => {
  return (
    <div className='max-w-[1240] mx-auto px-4 py-16 bg-black text-white text-center'>
        <div>
            <h1 className='py-4'>A Growing protocol Ecosystem</h1>
            <p1 className="py-4 text-xl">
                The Defi protocol system empowers developers, liquidity providers, and 
                traders to participate in a financial marketplace that is open and accessible 
                to all. 
            </p1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-6'>
                <Aboutcard 
                icon={<SiHiveBlockchain size={40}/>}
                heading="Reliable, tamper-proof network"
                text="Use decentralization, trusted nodes, premium data, and cryptographic 
                proofs to connect highly accurate and available data/APIs to any smart contact"
                 />
                 <Aboutcard 
                icon={<SiStrapi size={40}/>}
                heading="Seamless Connection to any API"
                text="Build on a flexible framework that can retrive data from any API, Coonect with 
                existing systems, and intergrate with any current or future Block chain."
                 />
                 <Aboutcard 
                icon={<SiFsecure size={40}/>}
                heading="Proven, ready-made solutions"
                text="Integrate pre-built, time-tested oracle solutions that already secure tens of  billions in smart contact value for market-leading decentralized applications"
                 />
                 <Aboutcard 
                icon={<VscServerProcess  size={40}/>}
                heading="Secure Off-Chain Computation"
                text="Use a decentralized network of Defi keeper notes to automate contacts, migrating risks of manual interventions and centralized servers"
                 />
            </div>
        </div>
    </div>
  )
}

export default About