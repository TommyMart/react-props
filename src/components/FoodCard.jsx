

export default function FoodCard(props){
    // cleaner version of below 
    const {foodName} = props
    return(
        <div>
            <h3>{foodName}</h3>
            {/* <h3>{props.foodName}</h3> */}
            <p>description of food</p>
        </div>
    )
}