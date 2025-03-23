import { useDispatch, useSelector } from "react-redux";
import PeopleCard from "../components/PeopleCard";
import { useEffect } from "react";
import { fetchPeople } from "../features/People/PeopleAction";

export default function People(){
  const dispatch = useDispatch()
  const {data} = useSelector(state=> state.people)
useEffect(()=>
{
dispatch(fetchPeople())
},[])

  return(
    <div className=" p-10 bg-white">
<div className=" grid grid-cols-3 gap-4">
{
  data.results&& data.results.map((person,index)=>(
<PeopleCard
name={person.name}
profile_path={`https://media.themoviedb.org/t/p/w470_and_h470_face${person.profile_path}`}
popularity={person.popularity}
overview={person.known_for[0].overview}
/>
  ))
}
</div>
    </div>
  )
}