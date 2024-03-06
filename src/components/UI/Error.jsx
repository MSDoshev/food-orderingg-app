export default function Error({title, message}){
    return <div className="w-11/12 max-w-96 my-8 mx-auto p-4 bg-red-400 text-red-950 rounded-md">
        <h2 className="m-0 font-bold">{title}</h2>
        <p className="m-0">{message}</p>
    </div>
   
} 