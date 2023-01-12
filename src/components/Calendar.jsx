
import React, {useState} from "react";


export const Calendar = () => {


    let testClass = ['class name tester', 'class description', 'class rating', 'class average', 'class link']
    let  testItem = [4, 5]
    const calendarMini = (classArray) =>{
        console.log('calendarMini')
        changeMonday(classArray)
        console.log(monday)
        return(
             <div>
                <div>
                    {classArray[0]}
                </div>
                <div>
                    {classArray[1]}
                </div>
                <div>
                    {classArray[2]}
                </div>
                <div>
                    {classArray[3]}
                </div>
                <div>
                    {classArray[4]}
                </div>
            </div>
        )
    }

    const [allData, setAllData] = React.useState([[["this is some test data"],0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]])
    
    function emptyCheck(input){
        if (input == 0){
            return false
        }
        else{
            return true
        }
    }
    const [visible, setVisible] = React.useState()


    const Popup = (day) =>{
        if (visible){
            return(
                <div style={{backgroundColor:'white'}}>
                    <div>
                        {day[0]}
                    </div>
                </div> 
           )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
    const onTime = (day) => {
        
        if(day == 0){
            return(
                <div>
                    Nothing here
                </div>
            )
        }
        else{
            return(
                <div>
                    <button onClick={() => setVisible(!visible)}>
                        Click me
                    </button>
                    {Popup(day)}
                </div>
            )
        }
    }

    const timeTable = (day) =>{
        let dayData = []
        if (day == 1){
            console.log('Monday')
            dayData = allData[0]
        }
        else if(day == 2){
            console.log('Tuesday')
            dayData = allData[1]
        }
        else if(day == 3){
            console.log('Wednesday')
            dayData = allData[2]
        }
        else if(day == 4){
            console.log('Thursday')
            dayData = allData[3]
        }
        else if(day == 5){
            console.log('Friday')
            dayData = allData[4]
        }
        
        return(
            <div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[0]) ? 'black' : 'red'}}> 
                    {onTime(dayData[0])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[1]) ? 'black' : 'red'}}>
                    {onTime(dayData[1])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[2]) ? 'black' : 'red'}}>
                    {onTime(dayData[2])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[3]) ? 'black' : 'red'}}>
                    {onTime(dayData[3])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[4]) ? 'black' : 'red'}}>
                    {onTime(dayData[4])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[5]) ? 'black' : 'red'}}>
                    {onTime(dayData[5])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[6]) ? 'black' : 'red'}}>
                    {onTime(dayData[6])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[7]) ? 'black' : 'red'}}>
                    {onTime(dayData[7])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[8]) ? 'black' : 'red'}}>
                    {onTime(dayData[8])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[9]) ? 'black' : 'red'}}>
                    {onTime(dayData[9])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[10]) ? 'black' : 'red'}}>
                    {onTime(dayData[10])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[11]) ? 'black' : 'red'}}>
                    {onTime(dayData[11])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[12]) ? 'black' : 'red'}}>
                    {onTime(dayData[12])}
                </div>
                <div style={{width:'100%', backgroundColor: emptyCheck(dayData[13]) ? 'black' : 'red'}}>
                    {onTime(dayData[13])}
                </div>
            </div>
        )
    }

    

   


    {/**testItem = [time in military time, item] */}

    const [monday, setMonday] = React.useState([])
    const changeMonday = (value) => {setMonday((monday) => [...monday, value]);}

    return(
        <div>
            
            <div>
                <div>Test button</div>
                <button onClick={() => calendarMini(['test', 'test', 'test', 'test', 'test'])}> Button</button>
                <div>
                    Monday
                    {JSON.stringify(monday)}
                </div>
            </div>
            <div style={{textAlign:'center'}}>
               {/**title*/}
                Calendar
            </div>
            <div>
                {/**Weeks of the day */}
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{paddingLeft:'10px', width:'60px'}}>
                        <div>Time</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                    </div>
                    <div style={{width:'20%'}}>
                        <div>Monday</div>
                        <div>{/**time from 7am to 8pm */}
                            
                            {timeTable(1)}

                        </div>
                    </div>
                    <div style={{width:'20%'}}>
                        <div>Tuesday</div>
                        <div>
                        {timeTable(2)}
                        </div>
                    </div>
                    <div style={{width:'20%'}}>
                        <div>Wednesday</div>
                        <div>
                        {timeTable(3)}
                        </div>
                    </div>
                    <div style={{width:'20%'}}>
                        <div>Thursday</div>
                        <div>
                        {timeTable(4)}
                        </div>
                    </div>
                    <div style={{width:'20%'}}>
                        <div>Friday</div>
                        <div>
                        {timeTable(5)}
                        </div>
                    </div>
                
                </div>
            </div>

            <div>

            </div>
        </div>
      
    )
    
  }
  