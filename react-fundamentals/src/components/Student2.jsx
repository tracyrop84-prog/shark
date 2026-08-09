import styles from "./Student2.module.css";
function Student2({ student }) {
  return( <div className={styles.card}>
  <p className={styles.name1}>{student.name1}</p>
  <p className={styles.course}>{student.course}</p>;
  <p className={styles.level}>{student.level}</p>;
 </div>
  )
}
export default Student2;
