
export const newRowsafa = (cyr, byr, gyr, m, d, gm, gd) => {


    let data = attemptsChecker(cyr, byr, gyr, m, d, gm, gd)
    let count = 0

    // Get the main element once and use it throughout
    const mainElement = document.getElementById('main');

    // Clear existing content before adding new rows
    mainElement.innerHTML = '';


    data.map(({ year, attempt, grad, timeslot, session }) => {
        if (count == 0) {
            document.getElementById('main').innerHTML += `
            
        
            
                <th>GRADUATION</th>
                <th>YEAR</th>
                <th>ATTEMPTS</th>
                <th>AGE LIMIT</th>
                <th>SESSION START AT AFA</th>
             



                <tr> 
                <td rowspan="2">${grad}</td>
                <td rowspan="2">${year}</td>
                <td>${attempt[0]}</td>
                <td>${timeslot[0]}</td>
                <td>${session[0]}</td>
             

                </tr>

                <tr>
                <td>${attempt[1]}</td>
                <td>${timeslot[1]}</td>
                <td>${session[1]}</td>
              
                 </tr>
        
            
                `
        } else {

            document.getElementById('main').innerHTML += `
            <tr> 
            <td rowspan="2">${grad}</td>
            <td rowspan="2">${year}</td>
            <td>${attempt[0]}</td>
            <td>${timeslot[0]}</td>
            <td>${session[0]}</td>
        

            </tr>

            <tr>
            <td>${attempt[1]}</td>
            <td>${timeslot[1]}</td>
            <td>${session[1]}</td>
          
             </tr>`

        }
        count = 1
    })
}

const attemptsChecker = (cyr, byr, gyr, m, d, gm, gd) => {
    // let date = new Date(byr + '-' + m + '-' + d)

    // console.log("birthdate", date);

    //
    let date = new Date(byr + '-' + m + '-' + d)

    console.log("birthdate", date);
    let gradyearrr = new Date(gyr + '-' + gm + '-' + gd)

    console.log("gradyearrrrr", gradyearrr);


    //

    let session = []
    session[0] = `11-13-${cyr}`
    session[1] = `05-13-${cyr+1}`

    // if (gradyearrr >= new Date(session[0])) {
    //     console.log("gr is kesss than", gradyearrr);
    // } else {
    //     console.log("greater", new Date(session[0]));
    // }


    let timeslot = []

    let data = []

    let status

    for (let i = cyr; i <= byr + 25; i++) {
        if (gyr > cyr) {

            status = "doing"

        } else if (gyr < cyr) {

            status = "completed"
        } else {
            status = "passed/appeared/appearing"
        }

        timeslot[0] = `${cyr-23}-01-02 to ${cyr-18}-01-01`
        timeslot[1] = `07-02-${cyr - 23} to 07-01-${cyr - 18}`
        timeslot[2] = `${cyr}-11-13`
        timeslot[3] = `${cyr+1}-08-13`


        let attempt = []

        let timeArr = timeslot[0].split(" ")

        console.log("time arr", timeArr);
        console.log("time ", timeslot);
        console.log("cyr ", cyr);

        // if (date >= new Date(timeArr[0]) && date <= new Date(timeArr[2])) {
        //     attempt[0] = '1     ✅'

        // } else {
        //     attempt[0] = '1     ❌'
        // }

        console.log("ggggggg", gradyearrr);
        console.log("ssssssssssss", new Date(timeslot[3]));
        console.log(gradyearrr <= new Date(timeslot[3]));
        if (date >= new Date(timeArr[0]) && date <= new Date(timeArr[2])) {
            if (gradyearrr <= new Date(timeslot[2])) {
                attempt[0] = '1     ✅'

            } else {
                attempt[0] = '1     ❌ due to session date'

            }

        } else {
            attempt[0] = '1     ❌ due to age'
        }
        timeArr = timeslot[1].split(" ")
        if (date >= new Date(timeArr[0]) && date <= new Date(timeArr[2])) {
            if (gradyearrr <= new Date(timeslot[3])) {
                attempt[1] = '2     ✅'
                console.log("ooooooooooo", date, new Date(timeArr[0]), new Date(timeArr[2]));

            } else {
                attempt[1] = '2     ❌ due to session date'

            }

        } else {
            attempt[1] = '2     ❌ due to age'
        }
        data.push({
            year: [cyr],
            attempt: attempt,
            grad: status,
            timeslot: [`02-01-${cyr - 23} to 01-01-${cyr - 18} `, `02-07-${cyr - 23} to 02-07-${cyr - 18}`],
            session: [`13-11-${cyr}`, `13-05-${cyr +1}`]
        })

        cyr = cyr + 1
    }
    return data

}

