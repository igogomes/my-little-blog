import styles from './About.module.css';

function About() {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.aboutIntroduction}>
                <h1>Sobre Mim</h1>
            </div>
            <div className={styles.aboutMainContent}>
                <div className={styles.imageAbout}>
                    <img src="https://picsum.photos/id/265/360/480" alt="Contact" />
                </div>
                <div className={styles.descriptionAbout}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et posuere erat. Sed dui elit, porttitor non leo et, lacinia hendrerit orci. Proin imperdiet lorem quis leo congue pretium. Proin aliquam blandit orci, vitae rhoncus dui mollis sit amet. Proin quis nisi quis mi feugiat tincidunt.</p>
                    <p>Phasellus quis nisi vel ex mattis lobortis. Nam vehicula eleifend orci et efficitur. In semper vestibulum dolor non pretium. Vestibulum in porta elit. In efficitur, mi vel malesuada finibus, nibh est scelerisque mauris, a mollis nisi nulla at lectus. Ut scelerisque, ligula quis dictum finibus, velit ligula sagittis tellus, eu varius massa enim sed ipsum. Curabitur quis sem enim. Morbi tristique porttitor erat vitae auctor. Curabitur fringilla arcu vel odio ornare, vitae tincidunt turpis tincidunt. Vivamus id fringilla lorem. Morbi congue iaculis ligula sed porttitor.</p>
                    <p>Mauris tempor a sapien ut ornare. Duis id eros eros. Nunc bibendum risus in lectus gravida lacinia. Sed id faucibus odio, nec varius risus. Maecenas sodales velit sit amet scelerisque hendrerit. Suspendisse molestie ante eget mi hendrerit auctor. Sed eleifend maximus maximus. Curabitur ac enim convallis, malesuada augue sed, pretium neque. In faucibus quis lorem vel maximus.</p>
                </div>
            </div>
        </section>
    );
}

export default About