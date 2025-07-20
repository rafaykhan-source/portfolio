import { IntroInfo } from './IntroInfo'

export function IntroCard() {
  return (
    <>
      <div className="max-w-6xl p-4">
        <div className="grid place-items-center sm:grid-flow-row-dense lg:grid-cols-3">
          <div className="flex-none place-self-center px-4">
            <img
              className="h-64 w-64 rounded-full"
              src="./src/assets/me.jpeg"
              alt="A photo of myself."
            ></img>
          </div>
          <div className="mx-4 lg:col-span-2 lg:mx-0">
            <IntroInfo></IntroInfo>
          </div>
        </div>
      </div>
    </>
  )
}
