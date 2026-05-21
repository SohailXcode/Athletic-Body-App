import { useState } from "react";

const workoutPlan = [
  {
    day: "MON", label: "Monday", focus: "Back & Biceps", tag: "Pull A — Strength",
    color: "#4D9FFF", cardio: "15 min stationary bike (post workout)",
    duration: "70–80 min", totalSets: 25, abs: null,
    sections: [
      { name: "Back", exercises: [
        { name: "Pull-Ups (Wide Grip)", sets: "4 × Max", note: "Add weight if 12+ easy — V-taper #1" },
        { name: "Barbell Bent-over Row (Overhand)", sets: "4 × 6, 6, 8, 8", note: "Go heavy — back thickness" },
        { name: "Lat Pulldown (Wide Grip)", sets: "3 × 12, 10, 10", note: "Lat width + pump" },
        { name: "Seated Cable Row (Narrow grip)", sets: "3 × 10, 10, 8", note: "Mid back thickness" },
        { name: "Dumbbell Shrugs", sets: "3 × 15, 12, 12", note: "Upper traps — shoulder to neck line" },
      ]},
      { name: "Biceps", exercises: [
        { name: "Barbell Curls", sets: "3 × 10, 8, 8", note: "Best overall bicep builder" },
        { name: "Incline Dumbbell Curl", sets: "3 × 12, 10, 10", note: "Long head stretch" },
        { name: "Hammer Curls", sets: "2 × 12, 12", note: "Brachialis — arm width" },
      ]},
    ],
  },
  {
    day: "TUE", label: "Tuesday", focus: "Chest & Triceps", tag: "Push A — Strength",
    color: "#FF4D4D", cardio: "15 min treadmill incline walk (post workout)",
    duration: "70–80 min", totalSets: 26, abs: null,
    sections: [
      { name: "Chest", exercises: [
        { name: "Incline Barbell Bench Press", sets: "4 × 8, 6, 6, 6", note: "Heavy — upper chest priority" },
        { name: "Flat Dumbbell Press", sets: "3 × 10, 10, 8", note: "Mid chest + stabilizers" },
        { name: "Weighted Dips", sets: "3 × 10, 8, 8", note: "Lower chest + tricep" },
        { name: "Incline Cable Fly", sets: "3 × 15, 12, 12", note: "Upper chest stretch + squeeze" },
      ]},
      { name: "Shoulders", exercises: [
        { name: "Lateral Raises (DB)", sets: "4 × 15, 15, 12, 12", note: "Shoulder width #1 — done fresh" },
        { name: "Face Pulls", sets: "3 × 15, 15, 12", note: "Rear delt + posture — non-negotiable" },
      ]},
      { name: "Triceps", exercises: [
        { name: "Skull Crushers (EZ Bar)", sets: "3 × 12, 10, 8", note: "Long head — arm shape" },
        { name: "Overhead DB Extension", sets: "3 × 12, 12, 10", note: "Long head stretch" },
      ]},
    ],
  },
  {
    day: "WED", label: "Wednesday", focus: "Legs + Core", tag: "Legs A — Quad Dominant",
    color: "#FFD700", cardio: null,
    duration: "75–85 min", totalSets: 17,
    abs: { label: "CORE FIRST — 15 min", exercises: [
      { name: "Hanging Leg Raises", sets: "3 × 15, 12, 12", note: "Lower abs" },
      { name: "Ab Wheel Rollout", sets: "3 × 10, 10, 8", note: "Full core stability" },
      { name: "Plank (weighted)", sets: "3 × 45–60 sec", note: "Anti-extension strength" },
    ]},
    sections: [
      { name: "Legs", exercises: [
        { name: "Barbell Squats", sets: "4 × 10, 8, 6, 6", note: "Athletic foundation — go heavy" },
        { name: "Leg Press (Heavy)", sets: "3 × 12, 10, 8", note: "Quad volume" },
        { name: "Romanian Deadlifts", sets: "3 × 10, 10, 8", note: "Hamstrings + glutes + posture" },
        { name: "Bulgarian Split Squats (DB)", sets: "3 × 10, 10, 10 each", note: "Unilateral balance" },
        { name: "Standing Calf Raises", sets: "4 × 20, 20, 15, 15", note: "Gastrocnemius" },
      ]},
    ],
  },
  {
    day: "THU", label: "Thursday", focus: "Back & Biceps", tag: "Pull B — Volume",
    color: "#4D9FFF", cardio: "15 min stationary bike (post workout)",
    duration: "70–75 min", totalSets: 25, abs: null,
    sections: [
      { name: "Back", exercises: [
        { name: "Pull-Ups (Neutral/Close Grip)", sets: "4 × Max", note: "Lower lats — different angle" },
        { name: "One Arm Dumbbell Row", sets: "4 × 12, 10, 10, 10 each", note: "Unilateral back thickness" },
        { name: "Close Grip Lat Pulldown", sets: "3 × 15, 12, 12", note: "Inner lats detail" },
        { name: "Face Pulls", sets: "3 × 20, 15, 15", note: "Rear delt + rotator cuff health" },
        { name: "Rear Delt Pec Deck", sets: "3 × 15, 12, 12", note: "Rear delt isolation" },
      ]},
      { name: "Biceps", exercises: [
        { name: "Barbell Curls", sets: "3 × 12, 10, 10", note: "Volume day — slightly lighter" },
        { name: "Hammer Curls", sets: "3 × 12, 12, 10", note: "Brachialis + brachioradialis" },
        { name: "Reverse Bar Curls", sets: "2 × 15, 12", note: "Forearm + brachioradialis" },
      ]},
    ],
  },
  {
    day: "FRI", label: "Friday", focus: "Chest + Shoulders + Triceps", tag: "Push B — Volume",
    color: "#FF4D4D", cardio: "15 min treadmill incline walk (post workout)",
    duration: "70–80 min", totalSets: 26, abs: null,
    sections: [
      { name: "Chest", exercises: [
        { name: "Incline Dumbbell Press", sets: "4 × 12, 10, 10, 8", note: "Upper chest volume" },
        { name: "Pec Deck Machine", sets: "3 × 15, 12, 12", note: "Inner chest squeeze" },
        { name: "Cable Crossover (Low to High)", sets: "3 × 15, 12, 12", note: "Upper chest cable" },
        { name: "Chest Dips (BW)", sets: "3 × Failure", note: "Lower chest + tricep finisher" },
      ]},
      { name: "Shoulders", exercises: [
        { name: "Standing DB Overhead Press", sets: "4 × 12, 10, 10, 8", note: "Shoulder mass + core activation" },
        { name: "Cable Lateral Raises (One Arm)", sets: "4 × 15, 15, 12, 12", note: "Best side delt exercise — constant tension" },
      ]},
      { name: "Triceps", exercises: [
        { name: "Straight Bar Pushdowns", sets: "3 × 15, 12, 12", note: "Lateral head" },
        { name: "Single Arm DB Kickbacks", sets: "2 × 12, 12 each", note: "Medial head detail" },
      ]},
    ],
  },
  {
    day: "SAT", label: "Saturday", focus: "Legs + Core", tag: "Legs B — Posterior Chain",
    color: "#FFD700", cardio: null,
    duration: "75–80 min", totalSets: 20,
    abs: { label: "CORE FIRST — 12 min", exercises: [
      { name: "Weighted Decline Sit-ups", sets: "3 × 15, 12, 12", note: "Upper abs with load" },
      { name: "Russian Twists (weighted)", sets: "3 × 20, 20, 15", note: "Obliques" },
      { name: "Dead Bug", sets: "3 × 10 each side", note: "Core stability + anti-rotation" },
    ]},
    sections: [
      { name: "Legs", exercises: [
        { name: "Hip Thrusts (Barbell)", sets: "4 × 12, 10, 10, 8", note: "#1 glute builder — go heavy" },
        { name: "Romanian Deadlifts", sets: "3 × 10, 10, 8", note: "Hamstring detail" },
        { name: "Bulgarian Split Squats", sets: "3 × 12, 10, 10 each", note: "Posterior emphasis" },
        { name: "Leg Curl (Lying)", sets: "3 × 15, 12, 12", note: "Hamstring isolation" },
        { name: "Cable Hip Adduction", sets: "3 × 15, 12, 12", note: "Inner thighs" },
        { name: "Seated Calf Raises", sets: "4 × 20, 20, 20, 15", note: "Soleus — ankle stability" },
      ]},
    ],
  },
  {
    day: "SUN", label: "Sunday", focus: "Rest & Recovery", tag: "Active Recovery",
    color: "#50C878", cardio: "20–30 min easy walk",
    duration: "20–30 min", totalSets: 0,
    abs: null, sections: [], isRest: true,
  },
];

const dietPlan = [
  {
    time: "7:30 AM", name: "Breakfast", icon: "🍳", color: "#FF4D4D", tag: "High Protein Start",
    items: [
      { name: "Whole Eggs", qty: "2 whole", gm: "~120g", p: 12, c: 1, f: 10 },
      { name: "Egg Whites", qty: "5 whites", gm: "~150g", p: 18, c: 0, f: 0 },
      { name: "Oats (cooked)", qty: "50g dry", gm: "50g", p: 6, c: 34, f: 3 },
    ],
    note: "Oats mein cinnamon ya salt — no sugar",
  },
  {
    time: "11:00 AM", name: "Mid Snack", icon: "🥜", color: "#b04dff", tag: "Low Cal Bridge",
    items: [
      { name: "Soaked Almonds", qty: "10 pcs", gm: "~15g", p: 3, c: 3, f: 7 },
      { name: "Cucumber / Carrot", qty: "1 bowl", gm: "~150g", p: 1, c: 5, f: 0 },
    ],
    note: "Low cal but filling — bhook control hoga",
  },
  {
    time: "1:30 PM", name: "Lunch", icon: "🍗", color: "#FFD700", tag: "Main Meal",
    items: [
      { name: "Roasted Chicken", qty: "200g", gm: "200g", p: 44, c: 0, f: 6 },
      { name: "White Rice (cooked)", qty: "100g", gm: "100g", p: 2, c: 23, f: 0 },
      { name: "Dal (any)", qty: "1 bowl", gm: "~150g", p: 12, c: 22, f: 2 },
      { name: "Sabji (green)", qty: "1 bowl", gm: "~150g", p: 3, c: 8, f: 1 },
      { name: "Chapati", qty: "1 roti", gm: "~40g", p: 3, c: 20, f: 1 },
      { name: "Fish Oil", qty: "2 caps", gm: "—", p: 0, c: 0, f: 2 },
    ],
    note: "Rice 100g only — deficit ke liye cut kiya",
  },
  {
    time: "4:15 PM", name: "Pre Workout", icon: "⚡", color: "#FF8C00", tag: "Energy Fuel",
    items: [
      { name: "Banana", qty: "1 medium", gm: "~120g", p: 1, c: 27, f: 0 },
      { name: "Pre Workout", qty: "1 scoop", gm: "~10g", p: 0, c: 5, f: 0 },
    ],
    note: "4:15–4:20 PM pe lo — 40 min before 5 PM workout",
  },
  {
    time: "8:00 PM", name: "Post Workout", icon: "💪", color: "#4D9FFF", tag: "Within 30 min",
    items: [
      { name: "Whey Protein", qty: "1 scoop", gm: "30g", p: 24, c: 3, f: 1 },
      { name: "Creatine", qty: "1 scoop ONLY", gm: "5g", p: 0, c: 0, f: 0 },
    ],
    note: "⚠️ Creatine 5g only — 2 scoops kabhi mat lo",
  },
  {
    time: "9:00 PM", name: "Dinner", icon: "🍽️", color: "#50C878", tag: "High Protein Low Carb",
    items: [
      { name: "Roasted Chicken", qty: "200g", gm: "200g", p: 44, c: 0, f: 6 },
      { name: "Chapati", qty: "2 rotis", gm: "~80g", p: 6, c: 40, f: 2 },
      { name: "Sabji (green)", qty: "1 bowl", gm: "~150g", p: 3, c: 8, f: 1 },
      { name: "Salad (cucumber+onion+lemon)", qty: "1 bowl", gm: "~200g", p: 1, c: 5, f: 0 },
    ],
    note: "Rice zero at dinner — chapati tak limit karo",
  },
  {
    time: "11:00 PM", name: "Before Bed", icon: "🌙", color: "#9B59B6", tag: "Overnight Recovery",
    items: [
      { name: "Full Fat Milk", qty: "125ml", gm: "125ml", p: 4, c: 6, f: 4 },
      { name: "Magnesium Pill", qty: "1 pill", gm: "—", p: 0, c: 0, f: 0 },
    ],
    note: "Casein slow digest — overnight muscle protect karta hai",
  },
];

const keyPrinciples = [
  { icon: "🔼", title: "Pull-Ups Priority", desc: "4 sets every Pull day — V-taper builder #1" },
  { icon: "📐", title: "Incline > Flat", desc: "Upper chest dominant — aesthetic chest look" },
  { icon: "↔️", title: "Lateral Raises", desc: "Done fresh, 4 sets — shoulder width priority" },
  { icon: "🎯", title: "Face Pulls", desc: "Every Push day — posture + rear delt" },
  { icon: "⚡", title: "Progressive Overload", desc: "Add weight when top rep feels easy" },
  { icon: "🚫", title: "No Junk Volume", desc: "Every set has a purpose — max ROI" },
];

function WorkoutTab() {
  const [activeDay, setActiveDay] = useState(0);
  const [showPrinciples, setShowPrinciples] = useState(false);
  const current = workoutPlan[activeDay];

  return (
    <div>
      <div style={{ padding: "14px 16px 0" }}>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
          {[{l:"BF%",v:"20.6%",c:"#FF4D4D"},{l:"Target BF",v:"13–15%",c:"#50C878"},{l:"SMM",v:"35.7kg",c:"#4D9FFF"},{l:"Weight",v:"78.6kg",c:"#FFD700"}].map(s => (
            <div key={s.l} style={{ flex:1, background:"#111", borderRadius:8, padding:"8px 4px", textAlign:"center", border:`1px solid ${s.c}20` }}>
              <div style={{ fontSize:11, fontWeight:"bold", color:s.c }}>{s.v}</div>
              <div style={{ fontSize:9, color:"#444", marginTop:2, fontFamily:"monospace" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Principles toggle */}
        <button onClick={() => setShowPrinciples(!showPrinciples)} style={{
          width:"100%", marginBottom:10, padding:"9px 14px",
          background: showPrinciples ? "#0a1a2a" : "#111",
          border:`1px solid ${showPrinciples ? "#1a3a5a" : "#1a1a1a"}`,
          borderRadius:8, color: showPrinciples ? "#4D9FFF" : "#555",
          fontSize:10, fontFamily:"monospace", cursor:"pointer", letterSpacing:2,
        }}>
          {showPrinciples ? "▲ HIDE ATHLETIC PRINCIPLES" : "▼ ATHLETIC AESTHETIC PRINCIPLES"}
        </button>

        {showPrinciples && (
          <div style={{ marginBottom:12, display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
            {keyPrinciples.map((p, i) => (
              <div key={i} style={{ background:"#111", borderRadius:8, padding:"10px 10px", border:"1px solid #1a1a1a" }}>
                <div style={{ fontSize:16, marginBottom:4 }}>{p.icon}</div>
                <div style={{ fontSize:11, color:"#ddd", fontWeight:"bold" }}>{p.title}</div>
                <div style={{ fontSize:10, color:"#555", marginTop:3 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* Day Selector */}
        <div style={{ display:"flex", gap:4, marginBottom:12 }}>
          {workoutPlan.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(i)} style={{
              flex:1, padding:"9px 2px", borderRadius:8,
              border:`1px solid ${activeDay===i ? d.color : "#1a1a1a"}`,
              background: activeDay===i ? d.color+"20" : "#111",
              color: activeDay===i ? d.color : "#444",
              fontSize:9, fontFamily:"monospace", cursor:"pointer", textAlign:"center", lineHeight:1.5,
            }}>
              <div style={{ fontWeight:"bold", fontSize:8 }}>{d.day}</div>
              <div style={{ fontSize:7, marginTop:1, color: activeDay===i ? d.color : "#333" }}>{d.focus.split(" ")[0]}</div>
            </button>
          ))}
        </div>

        {/* Day Header */}
        <div style={{ borderLeft:`3px solid ${current.color}`, paddingLeft:12, marginBottom:14 }}>
          <div style={{ fontSize:10, fontFamily:"monospace", color:current.color, letterSpacing:2 }}>{current.tag.toUpperCase()}</div>
          <div style={{ fontSize:18, fontWeight:"bold", marginTop:2 }}>{current.label} — {current.focus}</div>
          {!current.isRest && (
            <div style={{ display:"flex", gap:12, marginTop:4 }}>
              <span style={{ fontSize:11, color:"#555", fontFamily:"monospace" }}>⏱ {current.duration}</span>
              <span style={{ fontSize:11, color:"#555", fontFamily:"monospace" }}>📊 {current.totalSets} sets</span>
            </div>
          )}
        </div>

        {current.isRest ? (
          <div style={{ background:"#111", borderRadius:12, padding:24, textAlign:"center", border:"1px solid #1a1a1a", marginBottom:12 }}>
            <div style={{ fontSize:36 }}>😴</div>
            <div style={{ fontSize:15, color:"#50C878", fontWeight:"bold", marginTop:10 }}>Active Recovery</div>
            <div style={{ fontSize:12, color:"#555", marginTop:6 }}>Muscle grows when you rest, not when you lift.</div>
            <div style={{ marginTop:8, fontSize:12, color:"#555" }}>Stretch: chest, lats, hip flexors, hamstrings</div>
            <div style={{ marginTop:14, background:"#0a2a1a", borderRadius:8, padding:"10px 14px", fontSize:12, color:"#50C878", border:"1px solid #1a4a2a" }}>🚶 {current.cardio}</div>
          </div>
        ) : (
          <>
            {current.cardio && (
              <div style={{ background:"#0a1a2a", border:"1px solid #1a3a5a", borderRadius:8, padding:"9px 12px", marginBottom:12, fontSize:12, color:"#4D9FFF", display:"flex", gap:8 }}>
                <span>🏃</span><span><b>Cardio:</b> {current.cardio}</span>
              </div>
            )}

            {current.abs && (
              <div style={{ background:"#1a0a2a", border:"1px solid #3a1a5a", borderRadius:10, padding:"12px 14px", marginBottom:12 }}>
                <div style={{ fontSize:10, fontFamily:"monospace", color:"#b04dff", letterSpacing:2, marginBottom:8 }}>⚡ {current.abs.label}</div>
                {current.abs.exercises.map((ex, i) => (
                  <div key={i} style={{ padding:"8px 0", borderBottom: i < current.abs.exercises.length-1 ? "1px solid #2a1a3a" : "none" }}>
                    <div style={{ display:"flex", justifyContent:"space-between" }}>
                      <span style={{ fontSize:13, color:"#ddd" }}>{ex.name}</span>
                      <span style={{ color:"#b04dff", fontFamily:"monospace", fontSize:11 }}>{ex.sets}</span>
                    </div>
                    {ex.note && <div style={{ fontSize:10, color:"#555", marginTop:2 }}>{ex.note}</div>}
                  </div>
                ))}
              </div>
            )}

            {current.sections.map((section, si) => (
              <div key={si} style={{ background:"#111", borderRadius:10, marginBottom:12, overflow:"hidden", border:"1px solid #1a1a1a" }}>
                <div style={{ padding:"9px 14px", background:current.color+"15", borderBottom:"1px solid #1a1a1a", fontSize:10, fontFamily:"monospace", letterSpacing:2, color:current.color, display:"flex", justifyContent:"space-between" }}>
                  <span>{section.name.toUpperCase()}</span>
                  <span style={{ fontSize:9, color:current.color+"88" }}>{section.exercises.length} exercises</span>
                </div>
                {section.exercises.map((ex, ei) => (
                  <div key={ei} style={{ padding:"11px 14px", borderBottom: ei < section.exercises.length-1 ? "1px solid #141414" : "none", background: ei%2===0 ? "#111" : "#0f0f0f" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                      <div style={{ display:"flex", alignItems:"flex-start", gap:8, flex:1 }}>
                        <span style={{ width:20, height:20, borderRadius:"50%", background:current.color+"20", color:current.color, fontSize:9, fontFamily:"monospace", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{ei+1}</span>
                        <div>
                          <div style={{ fontSize:13, color:"#ddd" }}>{ex.name}</div>
                          {ex.note && <div style={{ fontSize:10, color:"#555", marginTop:2 }}>{ex.note}</div>}
                        </div>
                      </div>
                      <span style={{ fontSize:11, color:current.color, fontFamily:"monospace", flexShrink:0, marginLeft:8, textAlign:"right" }}>{ex.sets}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ background:"#111", border:"1px solid #2a2a10", borderRadius:8, padding:"10px 14px", display:"flex", gap:6, marginBottom:10 }}>
              {[{icon:"🥩",val:"155g",label:"Protein"},{icon:"🔥",val:"1850",label:"Kcal"},{icon:"😴",val:"7–8h",label:"Sleep"},{icon:"💧",val:"4L",label:"Water"}].map(t => (
                <div key={t.label} style={{ flex:1, textAlign:"center", background:"#0a0a0a", borderRadius:6, padding:"7px 4px", border:"1px solid #1a1a1a" }}>
                  <div style={{ fontSize:13 }}>{t.icon}</div>
                  <div style={{ fontSize:11, color:"#FFD700", fontWeight:"bold", marginTop:2 }}>{t.val}</div>
                  <div style={{ fontSize:9, color:"#444", fontFamily:"monospace" }}>{t.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DietTab() {
  const [expanded, setExpanded] = useState(null);
  const totals = dietPlan.reduce((acc, meal) => { meal.items.forEach(i => { acc.p+=i.p; acc.c+=i.c; acc.f+=i.f; }); return acc; }, { p:0, c:0, f:0 });
  const kcal = totals.p*4 + totals.c*4 + totals.f*9;

  return (
    <div style={{ padding:"14px 16px 0" }}>
      <div style={{ display:"flex", gap:6, marginBottom:10 }}>
        {[{l:"Kcal",v:`~${kcal}`,c:"#50C878"},{l:"Protein",v:`${totals.p}g`,c:"#FF4D4D"},{l:"Carbs",v:`${totals.c}g`,c:"#4D9FFF"},{l:"Fats",v:`${totals.f}g`,c:"#FFD700"}].map(m => (
          <div key={m.l} style={{ flex:1, background:"#111", borderRadius:8, padding:"10px 4px", textAlign:"center", border:`1px solid ${m.c}22` }}>
            <div style={{ fontSize:13, fontWeight:"bold", color:m.c }}>{m.v}</div>
            <div style={{ fontSize:9, color:"#444", marginTop:2, fontFamily:"monospace" }}>{m.l}</div>
          </div>
        ))}
      </div>

      <div style={{ background:"#0a1a0a", border:"1px solid #1a4a1a", borderRadius:8, padding:"9px 14px", marginBottom:12, display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:12, color:"#50C878" }}>🔥 ~500 kcal deficit below TDEE</span>
        <span style={{ fontSize:11, color:"#555", fontFamily:"monospace" }}>TDEE ~2350</span>
      </div>

      {dietPlan.map((meal, mi) => {
        const mTotal = meal.items.reduce((a,i) => ({p:a.p+i.p,c:a.c+i.c,f:a.f+i.f}), {p:0,c:0,f:0});
        const mKcal = mTotal.p*4 + mTotal.c*4 + mTotal.f*9;
        const isOpen = expanded === mi;
        return (
          <div key={mi} style={{ marginBottom:8, borderRadius:12, overflow:"hidden", border:`1px solid ${isOpen ? meal.color+"55" : "#1a1a1a"}` }}>
            <button onClick={() => setExpanded(isOpen ? null : mi)} style={{ width:"100%", padding:"11px 14px", background: isOpen ? meal.color+"12" : "#111", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:34, height:34, borderRadius:9, background:meal.color+"20", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17, flexShrink:0 }}>{meal.icon}</div>
                <div style={{ textAlign:"left" }}>
                  <div style={{ fontSize:14, fontWeight:"bold", color:"#eee" }}>{meal.name}</div>
                  <div style={{ fontSize:10, color:meal.color, fontFamily:"monospace", marginTop:1 }}>{meal.time} • {meal.tag}</div>
                </div>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:12, color:"#FF4D4D", fontFamily:"monospace", fontWeight:"bold" }}>{mTotal.p}g P</div>
                  <div style={{ fontSize:10, color:"#555", fontFamily:"monospace" }}>{mKcal} kcal</div>
                </div>
                <span style={{ color:meal.color, fontSize:11 }}>{isOpen ? "▲" : "▼"}</span>
              </div>
            </button>
            {isOpen && (
              <div style={{ background:"#0c0c0c", borderTop:`1px solid ${meal.color}22` }}>
                {meal.items.map((item, ii) => (
                  <div key={ii} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 14px", borderBottom: ii < meal.items.length-1 ? "1px solid #141414" : "none", background: ii%2===0 ? "#0c0c0c" : "#0e0e0e" }}>
                    <div>
                      <div style={{ fontSize:13, color:"#ddd" }}>{item.name}</div>
                      <div style={{ display:"flex", gap:6, marginTop:3 }}>
                        <span style={{ fontSize:10, color:meal.color, background:meal.color+"15", padding:"1px 7px", borderRadius:4, fontFamily:"monospace" }}>{item.gm}</span>
                        <span style={{ fontSize:10, color:"#555" }}>{item.qty}</span>
                      </div>
                    </div>
                    <div style={{ textAlign:"right", fontFamily:"monospace" }}>
                      <div style={{ fontSize:11, color:"#FF4D4D" }}>{item.p}g P</div>
                      <div style={{ fontSize:10, color:"#444" }}>{item.c}C • {item.f}F</div>
                    </div>
                  </div>
                ))}
                <div style={{ padding:"9px 14px", background:meal.color+"08", borderTop:`1px solid ${meal.color}15`, fontSize:11, color:"#777", display:"flex", gap:6 }}>
                  <span style={{ color:meal.color }}>💡</span><span>{meal.note}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop:8, borderRadius:12, overflow:"hidden", border:"1px solid #1a2a3a" }}>
        <div style={{ padding:"10px 14px", background:"#0d1a2a", fontSize:10, fontFamily:"monospace", color:"#4D9FFF", letterSpacing:3 }}>💊 SUPPLEMENT STACK</div>
        {[
          {name:"Whey Protein", timing:"Post workout — within 30 min", dose:"1 scoop", color:"#4D9FFF"},
          {name:"Creatine Monohydrate", timing:"Post workout — with whey", dose:"5g only ⚠️", color:"#FF4D4D"},
          {name:"Pre Workout", timing:"4:15 PM — 40 min before gym", dose:"1 scoop", color:"#FF8C00"},
          {name:"Fish Oil", timing:"With lunch", dose:"2 caps", color:"#50C878"},
          {name:"Magnesium", timing:"Before bed", dose:"1 pill", color:"#9B59B6"},
        ].map((s, i, arr) => (
          <div key={i} style={{ padding:"10px 14px", borderBottom: i<arr.length-1 ? "1px solid #111" : "none", background: i%2===0 ? "#0a0a0a" : "#0d0d0d", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <div style={{ fontSize:13, color:"#ddd" }}>{s.name}</div>
              <div style={{ fontSize:10, color:"#555", marginTop:1 }}>{s.timing}</div>
            </div>
            <div style={{ background:s.color+"22", color:s.color, padding:"3px 10px", borderRadius:6, fontSize:11, fontFamily:"monospace", flexShrink:0, marginLeft:8 }}>{s.dose}</div>
          </div>
        ))}
      </div>

      <div style={{ margin:"10px 0 4px", background:"#0a1a2a", border:"1px solid #1a3a5a", borderRadius:10, padding:"12px 14px", display:"flex", gap:10, alignItems:"center" }}>
        <span style={{ fontSize:24 }}>💧</span>
        <div>
          <div style={{ fontSize:13, color:"#4D9FFF", fontWeight:"bold" }}>3.5–4 Litre Water Daily</div>
          <div style={{ fontSize:11, color:"#555", marginTop:3 }}>Creatine ke saath must — fat loss + performance</div>
        </div>
      </div>
    </div>
  );
}

export default function FitnessApp() {
  const [tab, setTab] = useState("workout");
  return (
    <div style={{ fontFamily:"'Georgia', serif", background:"#0a0a0a", minHeight:"100vh", color:"#fff", maxWidth:480, margin:"0 auto", paddingBottom:80 }}>
      <div style={{ padding:"24px 16px 14px", borderBottom:"1px solid #1a1a1a", position:"sticky", top:0, zIndex:10, background:"#0a0a0a" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontSize:9, letterSpacing:4, color:"#444", fontFamily:"monospace" }}>ATHLETIC AESTHETIC PROTOCOL</div>
            <div style={{ fontSize:19, fontWeight:"bold", marginTop:2 }}>
              {tab === "workout" ? "💪 Workout Plan" : "🥗 Diet Plan"}
            </div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ background:"#111", borderRadius:6, padding:"3px 8px", fontSize:9, fontFamily:"monospace", color:"#555", border:"1px solid #1a1a1a" }}>Pull·Push·Legs×2</div>
            <div style={{ fontSize:9, color:"#333", fontFamily:"monospace", marginTop:3 }}>Zero Junk Volume</div>
          </div>
        </div>
      </div>

      {tab === "workout" ? <WorkoutTab /> : <DietTab />}

      <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:"#0d0d0d", borderTop:"1px solid #1a1a1a", display:"flex", zIndex:20 }}>
        {[
          {id:"workout", icon:"🏋️", label:"WORKOUT", color:"#4D9FFF"},
          {id:"diet", icon:"🥗", label:"DIET", color:"#50C878"},
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex:1, padding:"13px 8px", background:"transparent", border:"none", cursor:"pointer",
            display:"flex", flexDirection:"column", alignItems:"center", gap:3,
            borderTop: tab===t.id ? `2px solid ${t.color}` : "2px solid transparent",
          }}>
            <span style={{ fontSize:22 }}>{t.icon}</span>
            <span style={{ fontSize:10, fontFamily:"monospace", color: tab===t.id ? t.color : "#444", letterSpacing:2 }}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}