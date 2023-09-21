
import Image from "next/image"
import styles from "../../src/styles/About.module.css"



export default function about() {

    return (
    <div className={styles.about}>
         <h1>Sobre o projeto</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, deserunt illo? Facere, enim recusandae repellendus quam atque nemo aperiam necessitatibus similique est veritatis quaerat obcaecati, in tenetur sequi, nisi voluptate.</p>
         <Image src="/images/charizard.png" width="300" height="300" alt="charizard"></Image>
    </div>
      
    )
    
    }