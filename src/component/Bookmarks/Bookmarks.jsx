
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
  return (
    <div className="md:w-1/3 bg-stone-400 rounded-lg p-5">
      <div>
        <h3 className="text-2xl">
          Spent time on read : {readingTime}min
        </h3>
      </div>
      <h2 className="text-2xl text-center ">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark,idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
}

export default Bookmarks;

