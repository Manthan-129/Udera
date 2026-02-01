import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import uniqid from 'uniqid'
import Quill from 'quill'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddCourse = () => {

  const {backendUrl, token}= useContext(AppContext);
  const quillRef = useRef(null)
  const editorRef = useRef(null)

  const [courseTitle, setCourseTitle] = useState('')
  const [chapters, setChapters] = useState([])
  const [discount, setDiscount] = useState(0)
  const [coursePrice, setCoursePrice] = useState(0)
  const [courseThumbnail, setCourseThumbnail] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(null)

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  })


  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      })
    }
  }, [])


  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:')
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0
              ? chapters.slice(-1)[0].chapterOrder + 1
              : 1,
        }
        setChapters([...chapters, newChapter])
      }
    } else if (action === 'remove') {
      setChapters(
        chapters.filter(
          (chapter) => chapter.chapterId !== chapterId
        )
      )
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      )
    }
  }


  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId)
      setShowPopup(true)
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1)
          }
          return chapter
        })
      )
    }
  }


  const addLecture = () => {
    if(!lectureDetails.lectureTitle || !lectureDetails.lectureDuration || !lectureDetails.lectureUrl){
      alert("Please fill all the fields")
      return
    }
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          }
          chapter.chapterContent.push(newLecture)
        }
        return chapter
      })
    )

    setShowPopup(false)

    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    })
  }


  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      if(!courseThumbnail){
        toast.error("Please upload course thumbnail");
        return;
      }
      const courseData= {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
      }

      const formData= new FormData();
      formData.append('courseData', JSON.stringify(courseData));
      formData.append('image', courseThumbnail);

      const response= await axios.post(backendUrl + '/api/educator/add-course', formData, {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}});

      if(response.data.success){
        toast.success(response.data.message);
        setCoursePrice(0);
        setCourseTitle('');
        setDiscount(0);
        setChapters([]);
        quillRef.current.root.innerHTML= '';
        setCourseThumbnail(null);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      toast.error(error.message);
    }
  }

  return (
    <div
      className="min-h-screen bg-gray-50 p-6"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
      >

        <div>
          <p className="font-semibold text-gray-700 mb-1">
            Course Title
          </p>
          <input
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            type="text"
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <p className="font-semibold text-gray-700 mb-2">
            Course Description
          </p>
          <div
            ref={editorRef}
            className="bg-white border border-gray-300 rounded-lg min-h-[150px]"
          />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Course Price
            </p>
            <input
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>


          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Course Thumbnail
            </p>
            <label
              htmlFor="thumbnailImage"
              className="flex items-center gap-4 cursor-pointer"
            >
              <img
                src={assets.file_upload_icon}
                alt="upload icon"
                className="w-10 h-10"
              />

              <input
                type="file"
                id="thumbnailImage"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setCourseThumbnail(e.target.files[0])
                }
              />

              {courseThumbnail && (
                <img
                  src={URL.createObjectURL(courseThumbnail)}
                  alt=""
                  className="w-16 h-16 object-cover rounded-md"
                />
              )}
            </label>
          </div>

        </div>


        <div>
          <p className="font-semibold text-gray-700 mb-1">
            Discount (%)
          </p>
          <input
            type="number"
            min={0}
            max={100}
            placeholder="0"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>


        {/* Chapters & Lectures */}
        <div className="space-y-4">

          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <img
                    src={assets.dropdown_icon}
                    width={14}
                    alt=""
                    onClick={() =>
                      handleChapter('toggle', chapter.chapterId)
                    }
                    className="cursor-pointer"
                  />
                  <span className="font-semibold">
                    {index + 1}. {chapter.chapterTitle}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {chapter.chapterContent.length} Lectures
                  </span>
                  <img
                    src={assets.cross_icon}
                    alt=""
                    onClick={() =>
                      handleChapter('remove', chapter.chapterId)
                    }
                    className="cursor-pointer"
                  />
                </div>

              </div>

              {!chapter.collapsed && (
                <div className="mt-4 space-y-2">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex items-center justify-between text-sm bg-gray-50 px-3 py-2 rounded"
                    >
                      <span>
                        {lectureIndex + 1}. {lecture.lectureTitle} – {lecture.lectureDuration} min
                      </span>

                      <img
                        src={assets.cross_icon}
                        alt=""
                        className="cursor-pointer"
                        onClick={() =>
                          handleLecture(
                            'remove',
                            chapter.chapterId,
                            lectureIndex
                          )
                        }
                      />
                    </div>
                  ))}

                  <div
                    onClick={() =>
                      handleLecture('add', chapter.chapterId)
                    }
                    className="text-blue-600 cursor-pointer text-sm font-semibold"
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div
            onClick={() => handleChapter('add')}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            + Add Chapter
          </div>

        </div>


        {showPopup && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">

              <h2 className="text-lg font-bold">
                Add Lecture
              </h2>

              <input
                type="text"
                placeholder="Lecture Title"
                value={lectureDetails.lectureTitle}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureTitle: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2"
              />

              <input
                type="number"
                placeholder="Duration (minutes)"
                value={lectureDetails.lectureDuration}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureDuration: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Lecture URL"
                value={lectureDetails.lectureUrl}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureUrl: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2"
              />

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={lectureDetails.isPreviewFree}
                  onChange={(e) =>
                    setLectureDetails({
                      ...lectureDetails,
                      isPreviewFree: e.target.checked,
                    })
                  }
                />
                Free Preview
              </label>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={addLecture}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="text-gray-600"
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>
        )}


        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
        >
          ADD
        </button>

      </form>
    </div>
  )
}

export default AddCourse
