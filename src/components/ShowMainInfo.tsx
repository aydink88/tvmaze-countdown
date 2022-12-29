import { NO_IMAGE } from 'src/config';
import { IShow } from 'src/types';

export function ShowMainInfo({ showData }: { showData: IShow }) {
  return (
    <>
      <h3>{showData.name}</h3>
      <hr />
      <article className="showmain">
        <div className="showmain__poster">
          <img src={showData.image?.medium || NO_IMAGE} alt="show poster" />
        </div>
        <div className="showmain__info">
          <table className="showmain__info-table">
            <tbody className="showmain__info-tbody">
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Airs on:</p>
                </td>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">
                    {showData.network && showData.network.name} (
                    {showData.premiered && showData.premiered.split('-')[0]}–
                    {showData.ended && showData.ended.split('-')[0]})
                  </p>
                </td>
              </tr>
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Schedule:</p>
                </td>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">
                    {showData.schedule.days.join(',')} at {showData.schedule.time} (
                    {showData.averageRuntime})
                  </p>
                </td>
              </tr>
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Status:</p>
                </td>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">{showData.status}</p>
                </td>
              </tr>
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Show Type:</p>
                </td>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">{showData.type}</p>
                </td>
              </tr>
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Genres:</p>
                </td>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">{showData.genres.join(',')}</p>
                </td>
              </tr>
              <tr className="showmain__info-trow" style={{ height: '40px' }}>
                <td className="showmain__info-tdata">
                  <p className="showmain__info-tdata-p">Official site:</p>
                </td>
                <td className="showmain__info-tdata">
                  <a href={showData.officialSite} rel="noopener noreferrer" target="_blank">
                    <p className="showmain__info-tdata-p">{showData.officialSite}/</p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <div className="showmain__summary" dangerouslySetInnerHTML={{ __html: showData.summary }} />
    </>
  );
}

// const showData = {
//   id: 1,
//   url: 'https://www.tvmaze.com/shows/1/under-the-dome',
//   name: 'Under the Dome',
//   type: 'Scripted',
//   language: 'English',
//   genres: ['Drama', 'Science-Fiction', 'Thriller'],
//   status: 'Ended',
//   runtime: 60,
//   averageRuntime: 60,
//   premiered: '2013-06-24',
//   ended: '2015-09-10',
//   officialSite: 'http://www.cbs.com/shows/under-the-dome/',
//   schedule: {
//     time: '22:00',
//     days: ['Thursday'],
//   },
//   rating: {
//     average: 6.5,
//   },
//   weight: 98,
//   network: {
//     id: 2,
//     name: 'CBS',
//     country: {
//       name: 'United States',
//       code: 'US',
//       timezone: 'America/New_York',
//     },
//     officialSite: 'https://www.cbs.com/',
//   },
//   webChannel: null,
//   dvdCountry: null,
//   externals: {
//     tvrage: 25988,
//     thetvdb: 264492,
//     imdb: 'tt1553656',
//   },
//   image: {
//     medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
//     original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
//   },
//   summary:
//     "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
//   updated: 1631010933,
//   _links: {
//     self: {
//       href: 'https://api.tvmaze.com/shows/1',
//     },
//     previousepisode: {
//       href: 'https://api.tvmaze.com/episodes/185054',
//     },
//   },
// };
