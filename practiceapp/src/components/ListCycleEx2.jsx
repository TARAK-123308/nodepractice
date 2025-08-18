import React, { useEffect, useState } from "react";

function LifeCycleEx2() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        setLoading(false);
        console.log(json);
      })
      .catch((err) => console.log(err));
    return () => {
		setList([]);
		setLoading(true)
	};
  }, []);
  return (
    <div className="border-1 rounded-xl p-2 bg-slate-300">
      <h2>
        Functional Component
        <span className="bg-teal-500 px-3 py-1 rounded-lg mx-2">{count}</span>
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="border-1 px-2 rounded-lg shadow-lg"
      >
        Add
      </button>

	  <ul>
		{loading ? <h3>Loading...</h3> : list.map((item, index) => (
			<li>{item.title}</li>
		)) }
	  </ul>
    </div>
  );
}

export default LifeCycleEx2;
