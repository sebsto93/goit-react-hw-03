import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required')
})

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number)
        resetForm()
      }}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <Field name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label htmlFor="number" className={styles.label}>Number</label>
          <Field name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
