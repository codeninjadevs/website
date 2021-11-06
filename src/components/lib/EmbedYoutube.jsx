import React from "react";

export default function EmbedYoutube({ url }) {
	return (
		<div>
			<div className="video-responsive">
				<iframe
					width="853"
					height="480"
					src={url}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
					allowFullScreen
					autoPlay="1"
					title="Embedded youtube"
				/>
			</div>
			<style>{`
                .video-responsive {
                    overflow: hidden;
                    // padding-bottom: 35%;
                    position: relative;
                    height: calc(100vh - 160px);
                }
                
                .video-responsive iframe {
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                }
            `}</style>
		</div>
	);
}
