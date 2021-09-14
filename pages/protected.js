import Head from "next/head"
import { useRouter } from "next/router"
import Login from "../components/login"
import styles from "../components/Essentials.module.css"

export default function Protected({ hasReadPermission }) {
	const router = useRouter()

	if (!hasReadPermission) {
	  return <Login redirectPath={router.asPath} />
	}

  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <div>
			I am supposed to be protected.
			</div>
    </div>
  )
}
