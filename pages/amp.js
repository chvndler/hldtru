import { useAmp } from 'next/amp'
export const config = { amp: true }

export default function Amp(props) {

  return (
  <div>
    <amp-video
		src="https://cdn.hldtru.space/media/ocean.mp4"
		poster="https://cdn.hldtru.space/media/eeee.jpg"
		title="Video1"
		width="1920"
		height="1080"
		layout="responsive"
		controls>
    </amp-video>

		<br />
		<br />

		<amp-vimeo
      data-videoid="380921986"
      layout="responsive"
      width="500"
      height="281">
		</amp-vimeo>

  </div>
 )
}
