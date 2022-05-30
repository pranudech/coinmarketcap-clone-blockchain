import ChevronDown from '../assets/svg/chevronDown'
import { useState, useContext, useEffect } from 'react'
// import { GunContext } from '../context/gunContext'
// import { faker } from '@faker-js/faker'
import ChevronUp from '../assets/svg/chevronUp'
// import ChatCard from './ChatCard'
// import Button from './Button'
import shiba from '../assets/shiba.png'
import Image from 'next/image'

const styles = {
    bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
    bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943] border border-red-600 h-min px-2 rounded-lg`,
    input: `w-full bg-[#323546] p-4 outline-none rounded-xl`,
    chatContainer: `p-5 bg-[#222531] rounded-xl max-h-ful`,
    flexBetween: `flex justify-between`,
    flexCenter: `flex justify-center items-center`,
    chat: `max-w-lg min-w-full`,
    postButtonContainer: `flex align-center justify-end`,
    boldText: `font-bold`,

    activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
    activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
}

const Chat = () => {
    const [message, setMessage] = useState('')
    const [bullishValue, setBullishValue] = useState(true)


    return (
        <div>Chat</div>
    )
}

export default Chat