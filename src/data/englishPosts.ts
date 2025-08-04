import post1 from "./images/post1.webp";
import post2 from "./images/post2.webp";
import post3 from "./images/post3.webp";
import post4 from "./images/post4.webp";
import post5 from "./images/post5.webp";
import post6 from "./images/post6.webp";
import post7 from "./images/post7.webp";
export const engPosts = [
  {
    id: 1,
    author: "John Smith",
    title: "Type 1 Diabetes",
    image: post1,
    type: "eng",
    body: `
      <div>
        <h2>What is Type 1 Diabetes?</h2>
        <p><strong>Type 1 diabetes</strong> is a chronic autoimmune condition where the body attacks insulin-producing cells in the pancreas, causing little to no insulin production.</p>

        <h3>Causes</h3>
        <p>Genetics and environmental factors like viruses may trigger the immune system to destroy beta cells in the pancreas.</p>

        <h3>Symptoms</h3>
        <ul>
          <li>Frequent urination</li>
          <li>Extreme thirst</li>
          <li>Unintended weight loss</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
        </ul>

        <h3>Treatment</h3>
        <p>Type 1 diabetes requires lifelong insulin therapy, regular blood sugar monitoring, a healthy diet, and regular exercise.</p>

        <p><em>Although there's no cure, proper management can lead to a healthy life.</em></p>
      </div>
    `,
    updated_at: "Dec 25, 2024",
    categories: ["Knowledge", "Diabetes"],
  },
  {
    id: 2,
    author: "Jane Doe",
    title: "Type 2 Diabetes",
    image: post2,
    type: "eng",
    body: `
      <div>
        <h2>Understanding Type 2 Diabetes</h2>
        <p><strong>Type 2 diabetes</strong> is a metabolic disorder where the body becomes resistant to insulin or doesn't produce enough of it.</p>

        <h3>Causes</h3>
        <p>Risk factors include poor diet, physical inactivity, obesity, age, and family history.</p>

        <h3>Symptoms</h3>
        <ul>
          <li>Increased thirst and hunger</li>
          <li>Slow-healing wounds</li>
          <li>Frequent infections</li>
          <li>Numbness in hands or feet</li>
        </ul>

        <h3>Treatment</h3>
        <p>Management involves lifestyle changes, oral medications, and sometimes insulin.</p>

        <p><em>Type 2 diabetes is manageable and sometimes reversible with consistent effort.</em></p>
      </div>
    `,
    updated_at: "Dec 28, 2024",
    categories: ["Knowledge", "Diabetes"],
  },
  {
    id: 3,
    author: "Dr. Aye Aye",
    title: "Gestational Diabetes",
    image: post3,
    type: "eng",
    body: `
      <div>
        <h2>What is Gestational Diabetes?</h2>
        <p><strong>Gestational diabetes</strong> develops during pregnancy and typically disappears after childbirth.</p>

        <h3>Causes</h3>
        <p>Hormonal changes during pregnancy can reduce insulin sensitivity, leading to high blood sugar.</p>

        <h3>Risks</h3>
        <ul>
          <li>High birth weight in babies</li>
          <li>Increased chance of C-section</li>
          <li>Higher risk of Type 2 diabetes later in life</li>
        </ul>

        <h3>Treatment</h3>
        <p>Managed through diet, physical activity, blood sugar monitoring, and sometimes insulin.</p>

        <p><em>Regular prenatal care is key to managing gestational diabetes safely.</em></p>
      </div>
    `,
    updated_at: "Jan 3, 2025",
    categories: ["Pregnancy", "Diabetes"],
  },
  {
    id: 4,
    author: "Nurse Ko Ko",
    title: "Prediabetes",
    image: post4,
    type: "eng",
    body: `
      <div>
        <h2>Understanding Prediabetes</h2>
        <p><strong>Prediabetes</strong> is a condition where blood sugar levels are higher than normal but not high enough to be classified as Type 2 diabetes.</p>

        <h3>Warning Signs</h3>
        <ul>
          <li>Often no symptoms</li>
          <li>Darkened skin in armpits or neck (acanthosis nigricans)</li>
        </ul>

        <h3>Reversing Prediabetes</h3>
        <p>
          Lifestyle changes such as losing weight, eating healthier, and exercising regularly can prevent or delay progression to Type 2 diabetes.
        </p>

        <p><em>Early detection through blood tests is crucial.</em></p>
      </div>
    `,
    updated_at: "Jan 10, 2025",
    categories: ["Prevention", "Diabetes"],
  },
  {
    id: 5,
    author: "Dr. Lin",
    title: "Other Rare Types of Diabetes",
    image: post5,
    type: "eng",
    body: `
      <div>
        <h2>Less Common Forms of Diabetes</h2>
        <p>Aside from Type 1, Type 2, and gestational diabetes, there are several rare forms that are important to understand.</p>

        <h3>MODY (Maturity Onset Diabetes of the Young)</h3>
        <p>A genetic form that appears in adolescence or early adulthood. Unlike Type 1, insulin may not be necessary.</p>

        <h3>LADA (Latent Autoimmune Diabetes in Adults)</h3>
        <p>Shares features of both Type 1 and Type 2, but progresses more slowly and often misdiagnosed initially.</p>

        <h3>Secondary Diabetes</h3>
        <p>Caused by other medical conditions (e.g. pancreatitis) or medications (e.g. steroids).</p>

        <p><em>Diagnosis and treatment depend on the specific cause and type.</em></p>
      </div>
    `,
    updated_at: "Jan 12, 2025",
    categories: ["Rare Types", "Diabetes"],
  },
  {
    id: 6,
    author: "Dr. Jessica Lee",
    title:
      "Gestational Diabetes: A Temporary but Serious Condition During Pregnancy",
    image: post6,
    type: "eng",
    body: `
      <div>
        <h2>What is Gestational Diabetes?</h2>
        <p>
          <strong>Gestational diabetes</strong> is a type of diabetes that develops only during pregnancy. 
          It typically occurs in the second or third trimester and usually disappears after giving birth. 
          However, it increases the mother's risk of developing type 2 diabetes later in life.
        </p>

        <h3>Causes</h3>
        <p>
          During pregnancy, hormonal changes can make the body more resistant to insulin. 
          When the pancreas cannot keep up with the increased insulin demand, blood sugar levels rise, leading to gestational diabetes.
        </p>

        <h3>Risk Factors</h3>
        <ul>
          <li>Being overweight or obese before pregnancy</li>
          <li>Family history of diabetes</li>
          <li>Having had gestational diabetes in a previous pregnancy</li>
          <li>Polycystic ovary syndrome (PCOS)</li>
          <li>Being older than 25 during pregnancy</li>
        </ul>

        <h3>Symptoms</h3>
        <p>
          Most women do not experience noticeable symptoms. However, some may feel increased thirst, frequent urination, or fatigue. 
          Gestational diabetes is usually detected through routine screening tests.
        </p>

        <h3>Management</h3>
        <ul>
          <li>Healthy diet and regular exercise</li>
          <li>Monitoring blood sugar levels daily</li>
          <li>Sometimes insulin or oral medication is needed</li>
        </ul>

        <h3>Risks to Baby</h3>
        <ul>
          <li>High birth weight (macrosomia)</li>
          <li>Premature birth</li>
          <li>Low blood sugar after birth</li>
          <li>Increased risk of developing type 2 diabetes in the future</li>
        </ul>

        <p>
          <em>With proper management and prenatal care, most women with gestational diabetes can have healthy pregnancies and babies.</em>
        </p>
      </div>
    `,
    updated_at: "July 24, 2025",
    categories: ["Gestational Diabetes", "Women's Health"],
  },
  {
    id: 7,
    author: "Dr. Andrew White",
    title: "Diabetes Prevention: Practical Steps to Lower Your Risk",
    image: post7,
    type: "eng",
    body: `
      <div>
        <h2>Why Prevention Matters</h2>
        <p>
          While genetics play a role in diabetes, lifestyle choices significantly influence your risk. 
          The good news is that <strong>Type 2 diabetes</strong> is largely preventable with small but consistent changes in your daily routine.
        </p>

        <h3>1. Eat a Healthy, Balanced Diet</h3>
        <ul>
          <li>Limit processed foods and refined sugars</li>
          <li>Eat more whole grains, vegetables, and lean proteins</li>
          <li>Choose high-fiber options to control blood sugar levels</li>
        </ul>

        <h3>2. Exercise Regularly</h3>
        <p>
          Physical activity helps the body use insulin more efficiently. 
          Aim for at least <strong>150 minutes of moderate activity</strong> (like brisk walking) per week.
        </p>

        <h3>3. Maintain a Healthy Weight</h3>
        <p>
          Even a 5–7% weight loss can reduce the risk of developing diabetes. 
          Losing belly fat is especially important as abdominal fat increases insulin resistance.
        </p>

        <h3>4. Monitor Your Health</h3>
        <ul>
          <li>Check blood pressure, cholesterol, and blood sugar regularly</li>
          <li>Know your family history and discuss your risk with a doctor</li>
        </ul>

        <h3>5. Quit Smoking and Limit Alcohol</h3>
        <p>
          Smoking and excessive alcohol intake can increase insulin resistance and damage blood vessels. 
          Quitting smoking improves overall cardiovascular and metabolic health.
        </p>

        <h3>Final Thoughts</h3>
        <p>
          <em>
            Preventing diabetes is not about perfection—it's about progress. 
            Small daily habits can add up to a lifetime of health and lower your risk of chronic illness.
          </em>
        </p>
      </div>
    `,
    updated_at: "July 24, 2025",
    categories: ["Prevention", "Healthy Living", "Diabetes"],
  },
];
