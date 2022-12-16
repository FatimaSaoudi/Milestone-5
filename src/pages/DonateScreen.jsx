import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DateandTime from './DateandTime'; 
import Dropdown from './Dropdown';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { green } from '@mui/material/colors';
// import Sonnet from '../../components/Sonnet';



function DonateScreen() {

    
    return (
        <div className='container'>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className=" bg-light mt-5 mb-3 justify"
                fill
            >
                <Tab eventKey="category" title="Category">
                    {/* <Sonnet /> */}

                    <h3 className='mt-5 text-center'>Pick your donation items: </h3>

                    <div className='container justify-content-evenly d-flex'>
                        <Dropdown />
                    </div>
                </Tab>

                <Tab eventKey="collection" title="Collection">
                    {/* <Sonnet /> */}
                    <div className='mb-5 mt-5 text-center'>
                        <h3 className='mb-3'>Schedule a date and time to collect the items: </h3>
                        <p className='mb-5'>Please select a convenient slot</p>
                        <DateandTime />
                   </div>
                </Tab>

                <Tab justify eventKey="location" title="Location">
                    {/* <Sonnet /> */}
                    <h1>Location</h1>
                    <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                </Tab>

                <Tab eventKey="booking" title="Booking">
                    {/* <Sonnet /> */}
                    <div className="justify-content-center text-center">
                        <h2 className='mt-5'>Success</h2>
                        <CheckCircleOutlinedIcon sx={{ color: green[500], fontSize: 200 }}/>     
                        <h4 className='mt-2 mb-4'>Thank you!</h4>   
                        <p>Your booking has been confirmed.</p>
                        <p> We'll see you soon!</p>
                    </div>        

                </Tab>
            </Tabs>
        </div>
    );
}

export default DonateScreen;
