## destructing

- original 객체가 주어져있고, original 객체를 이용해 변경된 객체를 만들어내는 getChanged 함수가 존재합니다. 변경된 객체는 모든 속성은 그대로 유지하되, `company.name` 만 `Unemployed`에서 `Code States`로 바뀌어야 합니다. 이 때 반드시 구조 분해 할당(destructing)을 이용하십시오.