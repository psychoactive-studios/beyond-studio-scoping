import lottie from 'lottie-web';

class Preloader {
    constructor(){
        this.wrap = document.querySelector('#preloader .hero-text-wrapper')
        this.anim = lottie.loadAnimation({
            container: this.wrap,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            name: 'clocked',
            // animationData: data
            path:
                'https://uploads-ssl.webflow.com/6370af344b77a6b1153f7f41/63a12ce41b0e90f396c5df08_Beyond_Preloader_v06.json',
        })

        this.anim.addEventListener('data_ready', () => {
            console.log('loaded')
            this.anim.play()
            this.wrap.querySelector('svg').style.opacity = '1'
            // this.wrap.querySelector('svg').style.position = 'absolute'
            this.wrap.querySelector('img').style.opacity = '0'
        })
    }

    start(){
        this.anim.loop = true
        this.anim.play()
    }

    stop(loopNum = 1){
        let loop = 0
        let anim = this.anim
        return new Promise( (resolve, reject) => {
            anim.addEventListener('loopComplete', function loopListener() {
                loop = loop + 1
                if(loop >= loopNum){
                    anim.loop = false
                    anim.stop()
                    anim.removeEventListener('loopComplete', loopListener)
                    resolve()
                }

            })
        })
    }
}

export default Preloader