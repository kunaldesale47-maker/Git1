const referenceImage = "ChatGPT%20Image%20Sep%2027%2C%202026%2C%2002_58_06%20PM.png";
const fallbackData = {
  interests: [
    ["Technical","blue","https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=360&q=80"],
    ["AI & Computing","violet","https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=360&q=80"],
    ["Robotics","teal","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=360&q=80"],
    ["Aerospace","blue","https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=360&q=80"],
    ["Cultural","pink","https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=360&q=80"],
    ["Sports","green","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=360&q=80"],
    ["Creative","orange","https://images.unsplash.com/photo-1452802447250-d2a4a17a1a7a?auto=format&fit=crop&w=360&q=80"],
    ["Social Impact","purple","https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=360&q=80"],
    ["Entrepreneurship","teal","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=360&q=80"],
    ["Research","violet","https://images.unsplash.com/photo-1721355007794-16b3591c8d8d?auto=format&fit=crop&w=360&q=80"],
    ["Professional Chapters","gray","https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=360&q=80"]
  ],
  orientations: [
    ["Robotics Club Orientation","28","Sep","2:00 PM - 4:00 PM","Seminar Hall, Block A","Register Now","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=720&q=82"],
    ["FOSS Club Orientation","30","Sep","11:00 AM - 1:00 PM","Conference Room","Register Now","https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=720&q=82"],
    ["Media & Photography Club Orientation","02","Oct","3:00 PM - 5:00 PM","Auditorium","Register Now","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=720&q=82"]
  ],
  programs: [
    ["Inter-College Hackathon","05","Oct","9:00 AM - 6:00 PM","Main Building","View Details","https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=720&q=82"],
    ["AI & Machine Learning Workshop","08","Oct","10:00 AM - 4:00 PM","Computer Center","View Details","https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=720&q=82"]
  ],
  clubs: [
    ["Robotics Club","Technical","https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=520&q=80","♜"],
    ["FOSS Club","Technical","https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=520&q=80","♟"],
    ["GraphiX Club","Creative","https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=520&q=80","G"],
    ["E-Cell","Entrepreneurship","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=520&q=80","☀"],
    ["Aero Club","Technical","https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=520&q=80","✈"],
    ["Music Club","Cultural","https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=520&q=80","♫"]
  ],
  announcements: [["Registrations for Hackathon are now open","25 Sep 2026","teal"],["Robotics Club Orientation on 28th Sept","24 Sep 2026","teal"],["Venue updated for Coding Workshop","22 Sep 2026","orange"],["Cultural Fest Auditions - Registrations Open","22 Sep 2026","purple"]],
  achievements: [["PES MCOE Robotics Team wins National Championship","15 Sep 2026","robot"],["GraphiX Club - Best Design Award at Inter-College Fest","10 Sep 2026","ai"],["E-Cell recognized as Top Performing Cell in SPPU Region","05 Sep 2026","hack"]],
  chapters: ["ACM Student Chapter","IEEE Student Chapter","CSI Student Chapter","IETE Student Chapter","IEI Student Chapter","SAE Student Chapter"],
  activities: ["ED Cell","SPDC Centre","NSS","M-Pulse","Art Circle","Sports"]
};
let data = fallbackData;
const sprite = (kind) => `<span class="photo ${kind}" style="--ref:url('${referenceImage}')"></span>`;
function renderPortal() {
document.querySelector("#interest-row").innerHTML = data.interests.map(([label,color,image]) => `<a class="interest ${color}" href="#clubs"><span class="interest-photo" style="background-image:linear-gradient(135deg,rgba(6,35,83,.08),rgba(6,35,83,.42)),url('${image}')"></span><span>${label}</span></a>`).join("");
function eventCard(item) { const [title,date,month,time,place,cta,image] = item; return `<article class="event-card"><span class="photo event-photo" style="background-image:linear-gradient(135deg,rgba(4,26,65,.12),rgba(4,26,65,.28)),url('${image}')"></span><span class="date"><b>${date}</b><small>${month}</small></span><h3>${title}</h3><p><i>◷</i>${time}</p><p><i>♦</i>${place}</p><a href="#${cta === "Register Now" ? "orientations" : "programs"}">${cta}</a></article>`; }
document.querySelector("#orientation-cards").innerHTML = data.orientations.map(eventCard).join("");
document.querySelector("#program-cards").innerHTML = data.programs.map(eventCard).join("");
document.querySelector("#club-grid").innerHTML = data.clubs.map(([name,tag,image,icon]) => `<article class="club-card"><span class="club-photo" style="background-image:linear-gradient(135deg,rgba(4,29,70,.06),rgba(4,29,70,.33)),url('${image}')"><i>${icon}</i></span><h3>${name}</h3><small class="club-tag">${tag}</small><a href="#clubs">View Club <b>→</b></a></article>`).join("");
const initials = (name) => name.replace(" Student Chapter", "").split(" ").map((word) => word[0]).join("").slice(0, 4);
document.querySelector("#chapter-grid").innerHTML = data.chapters.map((name) => `<a class="community-card" href="#chapters"><span>${initials(name)}</span><b>${name}</b><small>Professional chapter</small></a>`).join("");
document.querySelector("#activity-grid").innerHTML = data.activities.map((name) => `<a class="community-card activity-card" href="#activities"><span>${initials(name)}</span><b>${name}</b><small>Activity / cell</small></a>`).join("");
document.querySelector("#announcements-list").innerHTML = data.announcements.map(([title,date,color]) => `<article class="notice"><i class="${color}"></i><div><p>${title}</p><small>${date}</small></div></article>`).join("");
document.querySelector("#achievements-list").innerHTML = data.achievements.map(([title,date,kind]) => `<article class="achievement">${sprite(kind)}<div><p>${title}</p><small>${date}</small></div></article>`).join("");
}
async function initialisePortal() {
  try {
    const response = await fetch(window.MCOE_PORTAL_API || "/api/portal/home", { headers: { Accept: "application/json" } });
    if (response.ok) data = { ...fallbackData, ...await response.json() };
  } catch { /* Static preview keeps the UI fallback until the portal API is connected. */ }
  renderPortal();
}
initialisePortal();
document.querySelector("#portal-search").addEventListener("submit", (event) => { event.preventDefault(); const query = document.querySelector("#portal-query").value.trim().toLowerCase(); const matches = [...data.clubs.map(([name]) => name), ...data.orientations.map(([name]) => name), ...data.programs.map(([name]) => name), ...data.chapters, ...data.activities, ...data.announcements.map(([name]) => name)].filter((name) => name.toLowerCase().includes(query)); document.querySelector("#query-message").textContent = query ? (matches.length ? `${matches.length} matching record${matches.length > 1 ? "s" : ""} found.` : "No matching portal record found.") : "Enter a club, chapter, program or activity to search."; });
document.querySelector(".mobile-menu").addEventListener("click", (event) => { const nav = document.querySelector(".nav-links"); nav.classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open")); });
