import React, { memo, useEffect, useMemo, useState } from 'react';
import styles from 'src/assets/styled/projects.module.css';
import { useGsap } from 'src/context/GsapContext';
import { viewData } from 'src/shared/data/viewData';

const ProjectPopup = memo(({projectId, closePopup, popupActive}) => {
    const {isLenis} = useGsap();
    const [style, setStyle] = useState({
        opacity: "0",
        display: "none",
    });

    useEffect(() => {
        if(popupActive) {
            setStyle(prev => ({
                ...prev,
                display: "block",
            }));

            isLenis.stop();
            document.body.style.overflow = "hidden";

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    opacity: "1",
                }));
            }, 100);

            return () => {
                clearTimeout(timerId);
                isLenis.start();
                document.body.style.overflow = "auto";
            }
        } else {
            setStyle(prev => ({
                ...prev,
                opacity: "0",
            }));

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    display: "none",
                }));
            }, 400);

            return () => clearTimeout(timerId);
        }
    }, [popupActive]);

    const data = useMemo(() => {
        return viewData?.filter(data => data?.id === projectId)[0];
    }, [projectId]);

    if(!projectId || !popupActive) return;

    return (
        <div
            data-lenis-prevent="" 
            style={style}
            className={styles.popup}
        >
            <button 
                className={styles.close_btn}
                onClick={closePopup}
            >
                <span></span>
                <span></span>
            </button>

            <h2 className={styles.title}>{data?.title}</h2>
            {/* 상단 */}

            <video 
                className={styles.video}
                src={data?.src}
                autoPlay
                muted
                loop
                playsInline
            ></video>
            {/* 비디오 */}

            <div className={styles.group}>
                <h3 className={styles.subject}>개요</h3>
                <p className={styles.tagline}>
                    {data?.tagline}<br />
                    <span>{data?.tagEx}</span>
                </p>

                <h4 className={styles.heading}>개발형태</h4>
                <p className={styles.ex}>{data?.role}</p>

                <h4 className={styles.heading}>URL</h4>
                <div className={styles.urls}>
                    <p className={styles.url_text}>
                        URL: <a href={data?.serviceUrl} target='_blank'>{data?.serviceUrl}</a>
                    </p>
                    {
                        //CoffeeOrderApp에서만 노출
                        data?.adminUrl &&
                        (
                            <p className={styles.url_text}>
                                AdminURL: <a href={data?.adminUrl} target='_blank'>{data?.adminUrl}</a>
                            </p>
                        )
                    }
                    {
                        //잔소리피하게게임에서만 노출
                        data?.itchUrl &&
                        (
                            <p className={styles.url_text}>
                                URL: <a href={data?.itchUrl} target='_blank'>{data?.itchUrl}</a>
                            </p>
                        )
                    }
                    <p className={styles.url_text}>
                        GitHub: <a href={data?.githubUrl} target='_blank'>{data?.githubUrl}</a>
                    </p>
                </div>
                
                {
                    //CineAi에서만 노출
                    data?.constraints !== undefined &&
                    (
                        <>
                            <h4 className={styles.heading}>프로젝트 제약 사항 및 안내</h4>
                            <p className={styles.tagline}>
                                {
                                    data?.constraints?.map((constraint) => (
                                        <span 
                                            style={{
                                                display: "block"
                                            }}
                                            key={constraint}
                                        >
                                            {constraint}
                                        </span>
                                    ))
                                }
                            </p>
                        </>
                    )
                }
                
                {
                    //CoffeeOrderApp에서만 노출
                    data?.projectId === "project_0" &&
                    (
                        <>
                            <h4 className={styles.heading}>테스트 계정</h4>
                            <p className={styles.ex}>
                                userID: test1<br />
                                userPW: test123!
                            </p>
                            <p className={styles.ex}>
                                adminID: admin<br />
                                adminPW: 1234!
                            </p>
                        </>
                    )
                }
            </div>
            {/* 개요 */}

            <div className={styles.group}>
                <h3 className={styles.subject}>TechStack</h3>
                <h4 className={styles.heading}>Frontend</h4>
                <ul className={styles.badges}>
                    {
                        data?.techStack?.frontend.map((badge) => (
                            <li
                                key={badge} 
                                className={styles.badge}
                            >
                                {badge}
                            </li>
                        ))
                    }
                </ul>
                
                {
                    data?.techStack?.backend !== undefined &&
                    (
                        <>
                            <h4 className={styles.heading}>Backend</h4>
                            <ul className={styles.badges}>
                                {
                                    data?.techStack?.backend.map((badge) => (
                                        <li
                                            key={badge} 
                                            className={styles.badge}
                                        >
                                            {badge}
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    )
                }
                
                {
                    data?.techStack?.CloudServices !== undefined &&
                    (
                        <>
                            <h4 className={styles.heading}>CloudServices</h4>
                            <ul className={styles.badges}>
                                {
                                    data?.techStack?.CloudServices.map((badge) => (
                                        <li
                                            key={badge} 
                                            className={styles.badge}
                                        >
                                            {badge}
                                        </li>
                                    ))
                                }
                            </ul>       
                        </>
                    )
                }
            </div>
            {/* 사용 기술 */}
            
            <div className={styles.group}>
                <h3 className={styles.subject}>주요 기능</h3>
                {
                    //CoffeeOrderApp에서만 노출되는 항목: User, Admin
                    //그 외의 노출되는 항목: Core
                    data?.features?.core !== undefined &&
                    (
                        <>
                            <ul className={styles.feat}>
                                {
                                    data?.features?.core?.map((feat) => (
                                        <li
                                            key={feat} 
                                            className={styles.feat_li}
                                        >
                                            {feat}
                                        </li>        
                                    ))
                                }
                            </ul>
                        </>
                    ) 
                }

                {
                    data?.features?.user !== undefined &&
                    (
                        <>
                            <h4 className={styles.heading}>User</h4>
                            <ul className={styles.feat}>
                                {
                                    data?.features?.user?.map((feat) => (
                                        <li
                                            key={feat} 
                                            className={styles.feat_li}
                                        >
                                            {feat}
                                        </li>        
                                    ))
                                }
                            </ul>
                        </>
                    )
                }
                
                {
                    data?.features?.admin !== undefined &&
                    (
                        <>
                            <h4 className={styles.heading}>Admin</h4>
                            <ul className={styles.feat}>
                                {
                                    data?.features?.admin?.map((feat) => (
                                        <li
                                            key={feat} 
                                            className={styles.feat_li}
                                        >
                                            {feat}
                                        </li>        
                                    ))
                                }
                            </ul>
                        </>
                    )
                }
            </div>
            {/* 주요 기능 */}

            <div className={styles.group}>
                <h3 className={styles.subject}>핵심 기술적 의도 및 데이터 구조 고민</h3>
                {
                    data?.keyDecisions.map((decisions) => (
                        <div
                            key={decisions.title}
                            className={styles.decisions_item}
                        >
                            <h5 className={styles.heading}>{decisions.title}</h5>
                            <p className={styles.ex}>{decisions.description}</p>
                        </div>
                    ))
                }
            </div>
            {/* 핵심 기술적 의도 및 데이터 구조 고민 */}
            
            {
                data?.troubleshooting !== undefined &&
                (
                    <div className={styles.group}>
                        <h3 className={styles.subject}>트러블슈팅</h3>
                        {
                            data?.troubleshooting.map((shoot, i) => (
                                <div 
                                    key={shoot.problem}
                                    className={styles.shoot_item}
                                >   
                                    <p className={styles.problem}>
                                        {i + 1}. {shoot.problem}
                                    </p>
                                    <p className={styles.shoot_situ}>
                                        <strong>[문제상황]</strong><br />
                                        {shoot.situation}
                                    </p>
                                    {
                                        shoot.cause !== undefined &&
                                        (
                                            <p className={styles.shoot_text}>
                                                <strong>[원인]</strong><br />
                                                {shoot.cause}
                                            </p>
                                        )
                                    }
                                    <p className={styles.shoot_text}>
                                        <strong>[해결방법]</strong><br />
                                        {shoot.solution}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {/* 트러블슈팅 */}

            <div className={styles.group}>
                <h3 className={styles.subject}>회고 및 향후 개선 과제</h3>
                <div className={styles.shoot_item}>
                    <h4 className={styles.heading}>아쉬운 점 및 배운 점</h4>
                    <p 
                        style={{
                            paddingLeft: "0"
                        }}
                        className={styles.shoot_situ}>
                        {data?.retrospective?.regret}
                    </p>
                </div>

                <div className={styles.shoot_item}>
                    <h4 className={styles.heading}>개선 및 확장 예정 사항</h4>
                    {
                        data?.retrospective?.future.map((futu) => (
                            <p 
                                style={{
                                    paddingLeft: "0"
                                }}
                                key={futu}
                                className={styles.shoot_situ}>
                                {futu}
                            </p>
                        ))
                    }
                </div>
            </div>
            {/* 회고 및 향후 개선 과제 */}
        </div>
    );
});

export default ProjectPopup;