import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsloading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch('https://learn-react-ebbc2-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setMeetupData(meetups);
        setIsloading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList data={meetupData} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
