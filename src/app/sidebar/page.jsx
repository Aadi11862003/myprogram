import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-12 space-y-6">
      <h2 className="text-2xl font-bold mb-4">TodoListPro</h2>
      <ul className="space-y-12 p-5 ">
        <li >
          <Link href="/add-task" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg   p-4">Add  Task</Link>
        </li>
        <li >
          <Link href="/search-task" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg  p-4">Search</Link>
        </li>
        <li  >
          <Link href="/inbox" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg p-4">Inbox</Link>
        </li>
        <li >
          <Link href="/today" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg p-4">Today</Link>
        </li>
        <li >
          <Link href="/todolist" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg p-4">To-do List</Link>
        </li>
        <li >
          <Link href="/upcoming" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg p-4">Upcoming</Link>
        </li>
        <li >
          <Link href="/filters" className="hover:text-gray-400 bg-blue-500 text-white  rounded-lg p-4">Filters</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;