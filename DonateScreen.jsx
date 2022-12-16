import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GetLocation from '../components/GetLocation';
import LocationTab from '../components/LocationTab';

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
                    <h1>Category</h1>
                    <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                </Tab>
                <Tab eventKey="pickup" title="Pickup schedule">
                    <h1>Pickup Schedule</h1>
                    <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                </Tab>
                <Tab justify eventKey="location" title="Location">
                    <LocationTab />
                </Tab>
                <Tab eventKey="bookingplace disabled" title="Booking Placed">
                    <h1>Booking Confirmed</h1>
                    <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default DonateScreen;