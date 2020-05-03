const formStandard = document.querySelector('form.standard');
const formMetric = document.querySelector('form.metric');

const BMI = document.querySelector('.bmi');
const stan = document.getElementById('standard');
const met = document.getElementById('metric');

stan.style.borderBottom = 'solid 3px #46c3db';


const calculateBMI = (weight, height) => {
  const result = weight / (height * height)

  return result
}

const calculateMetricBMI = (pounds, inches) => {
  const weight = (pounds * 0.45359237).toFixed(2);
  const height = (inches * 0.0254).toFixed(2);

  const result = weight / (height * height);

  return result;
}

formStandard.addEventListener('submit', (e) => {
  e.preventDefault();

  const weightInKg = document.getElementById('weightInKg');
  const heightInMetre = document.getElementById('heightInMetre');

  const final = calculateBMI(weightInKg.value, heightInMetre.value);
  console.log(final);
  BMI.textContent = final.toFixed(2);
  formStandard.reset()
});


formMetric.addEventListener('submit', e => {
  e.preventDefault();

  const weightInPounds = document.getElementById('weightInPounds');
  const heightInFt = document.getElementById('heightInFt');

  const final = calculateMetricBMI(weightInPounds.value, heightInFt.value);

  console.log(final);
  BMI.textContent = final.toFixed(2);
  formMetric.reset()
})

const displayStandardUI = () => {
  const standard = document.querySelector('.standard');
  const metric = document.querySelector('.metric');
  metric.style.display = 'none';
  standard.style.display = 'block';
  standard.style.display = 'flex';
  met.style.borderBottom = 'none';
  stan.style.borderBottom = 'solid 3px #46c3db';
}

const displayMetricUI = () => {
  const standard = document.querySelector('.standard');
  const metric = document.querySelector('.metric');
  metric.style.display = 'block';
  metric.style.display = 'flex';
  standard.style.display = 'none';
  met.style.borderBottom = 'solid 3px #46c3db';
  stan.style.borderBottom = 'none';
}

standard.addEventListener('click', displayStandardUI);
metric.addEventListener('click', displayMetricUI);