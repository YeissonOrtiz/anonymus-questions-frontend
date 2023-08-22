export default function Button ({children, additionalClasses, ...attrs}) {
  return (
    <button
      className={`bg-violet-800 mt-4 p-2 rounded-lg flex flex-row justify-center items-center ${additionalClasses}`}
      {...attrs}
    >
      {children}
    </button>
  )
}