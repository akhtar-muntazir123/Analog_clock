setInterval(()=>{
    d=new Date;
    htime= d.getHours();
    mtime= d.getMinutes();
    stime= d.getSeconds();
    srotation=6*stime;
    mrotation=6*mtime;
    hrotation=30*htime + mtime/2;
     
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

},1000);