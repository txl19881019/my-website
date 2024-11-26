import Giscus from '@giscus/react'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function Comment() {
    return <BrowserOnly>
        {() => <Giscus
            repo="txl19881019/TestProject" // 需要修改
            repoId="R_kgDOM9ny7Q" // 需要修改
            category="Announcements"
            categoryId="DIC_kwDOM9ny7c4Ckds-" // 需要修改
            mapping="title"
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            lang="zh-CN"
            loading="lazy"
        />}
    </BrowserOnly>
}