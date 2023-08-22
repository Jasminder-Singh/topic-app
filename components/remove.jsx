"use client";
import { useRouter } from 'next/navigation';
import { AiOutlineDelete } from 'react-icons/ai';

export default function Remove({ id }) {
    const router = useRouter();
    const remove = async () => {
        try {
            const response = await fetch(`https://topic-tracer.vercel.app/api/topics?id=${id}`,{
                method : "DELETE"
            });
            const result = await response.json();
            if(result.message == "Success") router.refresh();
        } catch (err) {
            alert(err);

        }

    }
    return (
        <div>
            <button onClick={remove}>
                <AiOutlineDelete className='text-2xl font-bold text-red-600 cursor-pointer mx-2' />
            </button>
        </div>
    )
}