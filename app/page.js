import Remove from '@/components/remove';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';



// For Accessing the data form the database;
const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-type": "application/json"
      }
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const data = await getData();


  return (
    <main >
      <div className="flex justify-center items-start p-10 ">
        <div className=" w-auto md:w-7/12 p-2 border-2 rounded-lg border-sky-900 h-3/5">
          <div className="border-2 rounded-md bg-purple-500 ">
            <h1 className="text-white text-3xl text-center p-5 font-bold">All Topics</h1>
          </div>
          {data?.result?.length ? // if data length is 0 then it will return null. else data.
            data.result.map((item) => {
              return (
                <div className="border-slate-900 p-3 border-2 border-dashed my-2 md:flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold flex items-center font-mono"><span className="bg-slate-900 w-2 h-2 mx-1 rounded-full"></span>{item.title}</h1>
                    <p className="px-5 font-semibold text-lg text-slate-600 text-justify ">{item.description}</p>
                  </div>
                  <div className='flex items-center justify-evenly'>
                    <Remove id={item._id} />
                    <Link href={`/editTopic/${item._id}`}>
                      <BiEdit className='text-2xl text-blue-500 cursor-pointer' id={item._id} />
                    </Link>
                  </div>
                </div>)
            })
            : null}
        </div>
      </div>
    </main>
  )
}
