import Head from 'next/head'
import Link from 'next/link'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Grid from '@react-css/grid'
import Button from 'react-bootstrap/Button';
import styles from '../components/Essentials.module.css'

	export default function Early() {
	  return (

<div className={styles.canvas_form}>
  <div className={styles.container_form}>
    <div className={styles.center}>
      <p className="h2">Early Access.</p>
      <Grid className={styles.grid_gap_sm} gap="2em"></Grid>

      <Form>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            type="password"
            placeholder="Enter password"
            as="input"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Text
            type="submit"
            as="button"
            variant="dark"
            id="inputGroup-sizing-sm"
          >
            Submit
          </InputGroup.Text>
        </InputGroup>

        <Grid className={styles.grid_gap_sm} gap="2em"></Grid>
        <p>
          <small>
            <i>power in </i>
            <strong>
              <i>truth</i>
            </strong>
            ®
          </small>
        </p>
      </Form>
    </div>
  </div>
</div>

  )
}
