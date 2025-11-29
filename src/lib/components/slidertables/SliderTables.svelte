<script>
  // Example static data
  let students = [
    { name: "< 1", text: "Excellent - Ideal setup",  },
    { name: "1-5", text: "Good - Generally acceptable",  },
    { name: "5-10", text: "Fair - May need improvement", },
    { name: ">10", text: "Poor - Action required", },
  ];
</script>

<table class="border w-full md:ml-3">
  <thead>
    <tr class="text-sm border ">
        
      <th class="px-4">Resistance (Ω)</th>
      <th>Evaluation</th>
     
    </tr>
  </thead>
  <tbody class="text-sm ">
    {#each students as student}
      <tr class="border-b border-slate-300" >
        <td class="flex justify-center items-center">{student.name}</td>
        <td class="px-3">{student.text}</td>
        
      </tr>
    {/each}
  </tbody>
</table>
