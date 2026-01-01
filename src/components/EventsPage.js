import React, { useState, useEffect, useRef } from 'react';
import './EventsPage.css';

function EventsPage() {
  const [ballPositionPx, setBallPositionPx] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState(0);
  const [isAtAnchor, setIsAtAnchor] = useState(true);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const timelineRef = useRef(null);
  const eventsPageRef = useRef(null);
  const previousAnchor = useRef(0);

  const events = [
    {
      id: 1,
      eventName: 'Registration Opens',
      date: 'January 7, 2026',
      time: '',
      description: 'Begin your journey by registering for the events'
    },
    {
      id: 2,
      eventName: 'The Round Table Conference',
      date: 'January 23, 2026',
      time: '12:00',
      description: 'Join industry leaders, entrepreneurs, and innovators for insightful discussions on the future of technology and business. This conference brings together diverse perspectives to address the challenges and opportunities in the modern tech landscape.'
    },
    {
      id: 3,
      eventName: 'PitchWave Arena',
      date: 'January 23, 2026',
      time: '15:00',
      description: 'Watch emerging entrepreneurs pitch their groundbreaking ideas with a prototype to a panel of investors and mentors. This is your chance to witness innovation in action and see how the next generation of startups are shaping the future.'
    },
    {
      id: 4,
      eventName: 'The Tech Forge Hackathon',
      date: 'January 24-25, 2026',
      time: '09:00',
      description: 'A 24-hour coding marathon where developers, designers, and innovators collaborate to build solutions that matter. Form teams, tackle real-world problems, and compete for exciting prizes while learning from industry experts.'
    }
  ];

  useEffect(() => {
    const calculateAndUpdateLine = () => {
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        const timelineContents = timeline.querySelectorAll('.timeline-content');
        
        console.log('=== TIMELINE CALCULATION DEBUG ===');
        console.log('Total timeline items:', timelineItems.length);
        console.log('Total timeline contents:', timelineContents.length);
        
        if (timelineItems.length >= 2) {
          const isMobile = window.innerWidth <= 768;
          console.log('Is mobile:', isMobile);
          console.log('Window width:', window.innerWidth);
          
          let firstItemCenter, lastItemCenter;
          
          if (isMobile && timelineContents.length >= 2) {
            timelineItems.forEach((item, index) => {
              const content = item.querySelector('.timeline-content');
              const center = item.querySelector('.timeline-center');
              if (content && center) {
                const contentOffsetTop = content.offsetTop;
                const contentMidpoint = contentOffsetTop + (content.offsetHeight / 2);
                center.style.top = `${contentMidpoint}px`;
                center.style.left = '30px';
                console.log(`Item ${index}: content offsetTop=${contentOffsetTop}, height=${content.offsetHeight}, midpoint=${contentMidpoint}`);
              }
            });
            
            const firstItem = timelineItems[0];
            const lastItem = timelineItems[timelineItems.length - 1];
            const firstContent = firstItem.querySelector('.timeline-content');
            const lastContent = lastItem.querySelector('.timeline-content');
            
            console.log('First item offsetTop:', firstItem.offsetTop);
            console.log('First content offsetTop:', firstContent.offsetTop);
            console.log('First content height:', firstContent.offsetHeight);
            
            console.log('Last item offsetTop:', lastItem.offsetTop);
            console.log('Last content offsetTop:', lastContent.offsetTop);
            console.log('Last content height:', lastContent.offsetHeight);
            
            firstItemCenter = firstItem.offsetTop + firstContent.offsetTop + (firstContent.offsetHeight / 2);
            lastItemCenter = lastItem.offsetTop + lastContent.offsetTop + (lastContent.offsetHeight / 2);
            
            console.log('FORMULA: firstItemCenter = firstItem.offsetTop + firstContent.offsetTop + (firstContent.offsetHeight / 2)');
            console.log(`FORMULA: ${firstItem.offsetTop} + ${firstContent.offsetTop} + (${firstContent.offsetHeight} / 2) = ${firstItemCenter}`);
            
            console.log('FORMULA: lastItemCenter = lastItem.offsetTop + lastContent.offsetTop + (lastContent.offsetHeight / 2)');
            console.log(`FORMULA: ${lastItem.offsetTop} + ${lastContent.offsetTop} + (${lastContent.offsetHeight} / 2) = ${lastItemCenter}`);
          } else {
            timelineItems.forEach((item, index) => {
              const center = item.querySelector('.timeline-center');
              if (center) {
                const itemMidpoint = item.offsetHeight / 2;
                center.style.top = `${itemMidpoint}px`;
                console.log(`Desktop Item ${index}: height=${item.offsetHeight}, midpoint=${itemMidpoint}`);
              }
            });
            
            const firstItem = timelineItems[0];
            const lastItem = timelineItems[timelineItems.length - 1];
            firstItemCenter = firstItem.offsetTop + firstItem.offsetHeight / 2;
            lastItemCenter = lastItem.offsetTop + lastItem.offsetHeight / 2;
            
            console.log('Desktop calculation:');
            console.log('First item center:', firstItemCenter);
            console.log('Last item center:', lastItemCenter);
          }
          
          const calculatedLineHeight = lastItemCenter - firstItemCenter;
          
          console.log('FINAL CALCULATION:');
          console.log(`Line height = lastItemCenter - firstItemCenter = ${lastItemCenter} - ${firstItemCenter} = ${calculatedLineHeight}`);
          console.log(`Line top = ${firstItemCenter}`);
          console.log(`Ball position = ${firstItemCenter}`);
          
          if (calculatedLineHeight > 0) {
            setLineTop(firstItemCenter);
            setLineHeight(calculatedLineHeight);
            setBallPositionPx(firstItemCenter + 15);
            console.log('✓ Line height is valid, applying values');
          } else {
            const fallbackHeight = (timelineItems.length - 1) * 230;
            const fallbackTop = firstItemCenter;
            setLineTop(fallbackTop);
            setLineHeight(fallbackHeight);
            setBallPositionPx(fallbackTop + 15);
            console.log('⚠ Line height invalid, using fallback:', fallbackHeight);
          }
          
          console.log('=================================');
        }
      }
    };
    
    const handleScroll = () => {
      if (eventsPageRef.current && timelineRef.current) {
        const eventsPage = eventsPageRef.current;
        const timeline = timelineRef.current;
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        const timelineContents = timeline.querySelectorAll('.timeline-content');
        
        if (timelineItems.length < 2 || timelineContents.length < 2) return;
        
        console.log('=== HANDLE SCROLL DEBUG ===');
        
        const isMobile = window.innerWidth <= 768;
        
        let firstItemCenter, lastItemCenter;
        
        if (isMobile) {
          const firstContent = timelineContents[0];
          const lastContent = timelineContents[timelineContents.length - 1];
          
          const firstItem = firstContent.parentElement;
          const lastItem = lastContent.parentElement;
          
          console.log('SCROLL: First item offsetTop:', firstItem.offsetTop);
          console.log('SCROLL: Last item offsetTop:', lastItem.offsetTop);
          
          firstItemCenter = firstItem.offsetTop + firstContent.offsetTop + firstContent.offsetHeight / 2;
          lastItemCenter = lastItem.offsetTop + lastContent.offsetTop + lastContent.offsetHeight / 2;
          
          console.log('SCROLL: firstItemCenter =', firstItemCenter);
          console.log('SCROLL: lastItemCenter =', lastItemCenter);
        } else {
          const firstItem = timelineItems[0];
          const lastItem = timelineItems[timelineItems.length - 1];
          firstItemCenter = firstItem.offsetTop + firstItem.offsetHeight / 2;
          lastItemCenter = lastItem.offsetTop + lastItem.offsetHeight / 2;
        }
        
        const currentLineHeight = lastItemCenter - firstItemCenter;
        
        console.log('SCROLL: currentLineHeight =', currentLineHeight);
        console.log('SCROLL: This is OVERRIDING the 747px value!');
        
        const effectiveLineHeight = currentLineHeight > 0 ? currentLineHeight : (timelineItems.length - 1) * 230;
        const effectiveLineTop = firstItemCenter;
        
        console.log('SCROLL: Setting line height to:', effectiveLineHeight);
        console.log('SCROLL: Setting line top to:', effectiveLineTop);
        
        const scrollTop = eventsPage.scrollTop;
        const scrollHeight = eventsPage.scrollHeight;
        const viewportHeight = eventsPage.clientHeight;
        
        const maxScroll = scrollHeight - viewportHeight;
        const scrollPercent = maxScroll > 0 ? Math.max(0, Math.min(100, (scrollTop / maxScroll) * 100)) : 0;
        
        const timelineCenters = timeline.querySelectorAll('.timeline-center');
        const ballRadius = 15;
        
        const anchorPositions = Array.from(timelineCenters).map(center => {
          let absoluteTop = parseFloat(center.style.top) || 0;
          let parent = center.offsetParent;
          
          while (parent && parent !== timeline) {
            absoluteTop += parent.offsetTop;
            parent = parent.offsetParent;
          }
          
          absoluteTop += ballRadius;
          
          const centerScrollPos = absoluteTop - eventsPage.offsetTop;
          const scrollPercentForCenter = maxScroll > 0 ? (centerScrollPos / maxScroll) * 100 : 0;
          return { scrollPercent: Math.max(0, Math.min(100, scrollPercentForCenter)), position: absoluteTop };
        });
        
        let nearestAnchor = 0;
        let minDistance = Math.abs(scrollPercent - anchorPositions[0].scrollPercent);
        
        anchorPositions.forEach((anchor, index) => {
          const distance = Math.abs(scrollPercent - anchor.scrollPercent);
          if (distance < minDistance) {
            minDistance = distance;
            nearestAnchor = index;
          }
        });
        
        const newBallPos = anchorPositions[nearestAnchor].position;
        const isChangingAnchor = previousAnchor.current !== nearestAnchor;
        
        setActiveAnchor(nearestAnchor);
        setBallPositionPx(newBallPos);
        
        if (isChangingAnchor) {
          setIsAtAnchor(false);
          previousAnchor.current = nearestAnchor;
          setTimeout(() => {
            setIsAtAnchor(true);
          }, 1200);
        }
        
        setLineTop(effectiveLineTop);
        setLineHeight(effectiveLineHeight);
        
        console.log('=================================');
      }
    };

    const eventsPage = eventsPageRef.current;
    
    const observer = new ResizeObserver(() => {
      calculateAndUpdateLine();
    });
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    setTimeout(calculateAndUpdateLine, 100);
    setTimeout(calculateAndUpdateLine, 300);
    setTimeout(calculateAndUpdateLine, 600);
    setTimeout(calculateAndUpdateLine, 1000);
    
    if (eventsPage) {
      eventsPage.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {
        eventsPage.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
    
    return () => observer.disconnect();
  }, []);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const handleRegister = (eventName) => {
    alert(`Registration for ${eventName} coming soon!`);
  };

  return (
    <div className="events-page" ref={eventsPageRef}>
      <div className="timeline-section">
        <h2 className="events-section-title">Event Timeline</h2>
        <div className="timeline" ref={timelineRef}>
          <div 
            className="timeline-line" 
            style={{ 
              top: `${lineTop}px`, 
              height: `${lineHeight}px` 
            }}
          ></div>
          <div 
            className={`timeline-ball ${isAtAnchor ? 'active' : ''}`} 
            style={{ top: `${ballPositionPx}px` }}
          ></div>
          
          <div className={`timeline-item ${activeAnchor === 0 ? 'active' : ''}`}>
            <div className="timeline-content">
              <h3 className="timeline-title">{events[0].eventName}</h3>
              <p className="timeline-date">{events[0].date}</p>
              <p className="timeline-description">{events[0].description}</p>
              <div className="timeline-buttons">
                <button className="timeline-btn details-btn" onClick={() => openEventDetails(events[0])}>
                  Details
                </button>
                <button className="timeline-btn register-btn" onClick={() => handleRegister(events[0].eventName)}>
                  Register
                </button>
              </div>
            </div>
            <div className={`timeline-center ${activeAnchor === 0 ? 'active' : ''}`}></div>
            <div className="timeline-image-container">
              <div className="timeline-image"></div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeAnchor === 1 ? 'active' : ''}`}>
            <div className="timeline-image-container">
              <div className="timeline-image"></div>
            </div>
            <div className={`timeline-center ${activeAnchor === 1 ? 'active' : ''}`}></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{events[1].eventName}</h3>
              <p className="timeline-date">{events[1].date}{events[1].time && ` at ${events[1].time}`}</p>
              <p className="timeline-description">{events[1].description}</p>
              <div className="timeline-buttons">
                <button className="timeline-btn details-btn" onClick={() => openEventDetails(events[1])}>
                  Details
                </button>
                <button className="timeline-btn register-btn" onClick={() => handleRegister(events[1].eventName)}>
                  Register
                </button>
              </div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeAnchor === 2 ? 'active' : ''}`}>
            <div className="timeline-content">
              <h3 className="timeline-title">{events[2].eventName}</h3>
              <p className="timeline-date">{events[2].date}{events[2].time && ` at ${events[2].time}`}</p>
              <p className="timeline-description">{events[2].description}</p>
              <div className="timeline-buttons">
                <button className="timeline-btn details-btn" onClick={() => openEventDetails(events[2])}>
                  Details
                </button>
                <button className="timeline-btn register-btn" onClick={() => handleRegister(events[2].eventName)}>
                  Register
                </button>
              </div>
            </div>
            <div className={`timeline-center ${activeAnchor === 2 ? 'active' : ''}`}></div>
            <div className="timeline-image-container">
              <div className="timeline-image"></div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeAnchor === 3 ? 'active' : ''}`}>
            <div className="timeline-image-container">
              <div className="timeline-image"></div>
            </div>
            <div className={`timeline-center ${activeAnchor === 3 ? 'active' : ''}`}></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{events[3].eventName}</h3>
              <p className="timeline-date">{events[3].date}{events[3].time && ` at ${events[3].time}`}</p>
              <p className="timeline-description">{events[3].description}</p>
              <div className="timeline-buttons">
                <button className="timeline-btn details-btn" onClick={() => openEventDetails(events[3])}>
                  Details
                </button>
                <button className="timeline-btn register-btn" onClick={() => handleRegister(events[3].eventName)}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeEventDetails}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeEventDetails}>×</button>
            <h2 className="modal-title">{selectedEvent.eventName}</h2>
            <div className="modal-meta">
              <p className="modal-date"><span className="modal-icon">DATE:</span> {selectedEvent.date}</p>
              {selectedEvent.time && <p className="modal-time"><span className="modal-icon">TIME:</span> {selectedEvent.time}</p>}
            </div>
            <p className="modal-description">{selectedEvent.description}</p>
            <button className="modal-register-btn" onClick={() => handleRegister(selectedEvent.eventName)}>
              Register Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsPage;
