import React, {useContext, useRef} from 'react'
import {themeContext} from '../App'
function AddReciepe() {
	const {reciepes, setReciepes} = useContext(themeContext)
	const titleRef = useRef();
	const descriptionRef = useRef();
	const ingredientsRef = useRef();
	const instructionsRef = useRef();
	const categoryRef = useRef();
	const addReciepe = (event)=>{
		event.preventDefault();
		const reciepe = {
			id: reciepes.length + 1,
			title : titleRef.current.value,
			description : descriptionRef.current.value,
			ingred : ingredientsRef.current.value.split(", "),
			instr : instructionsRef.current.value,
			category : categoryRef.current.value,
		}
	setReciepes((prevState)=>[...prevState, reciepe])
	Reset()
	}

	const Reset = ()=>{
		titleRef.current.value = ""
		descriptionRef.current.value = ""
		ingredientsRef.current.value = ""
		instructionsRef.current.value = ""
		categoryRef.current.value = ""
	}

  return (
	<div className='mx-auto bg-sky-200 w-90 '>
		<form onSubmit={addReciepe} className='flex flex-col'>
			<div className='p-4 flex justify-around'>
				<label>Title</label>
				<input type='text' className='border-1' placeholder='Enter Title' ref={titleRef} />
			</div>
			<div className='p-4 flex justify-around' >
				<label >Description</label>
				<input type='text' className='border-1' placeholder='Enter Title' ref={descriptionRef} />
			</div>
			<div className='p-4 flex justify-around'>
				<label className='justify-start'>Ingredients</label>
				<input type='text' className='border-1' placeholder='Enter Title' ref={ingredientsRef} />
			</div>
			<div className='p-4 flex justify-around'>
				<label>Instructions</label>
				<input type='text' className='border-1' placeholder='Enter Title' ref={instructionsRef} />
			</div>
			<div className='p-4 flex justify-around'>
				<label>Category</label>
				<input type='text' className='border-1' placeholder='Enter Title' ref={categoryRef} />
			</div>
			<button type='submit' className='bg-sky-400 border-1 hover:bg-sky-900' >Add Reciepe</button>
		</form>
	</div>
  )
}

export default AddReciepe