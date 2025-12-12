(function () {
       // handle all nav links that point to in-page anchors
       document.querySelectorAll('a.nav-link[href^="#"], a[href="#contact"], a[href="#information"]').forEach(function (link) {
         link.addEventListener('click', function (e) {
           var targetId = this.getAttribute('href');
           if (!targetId || targetId === '#' || targetId === '#!') return;
           var targetEl = document.querySelector(targetId);
           if (!targetEl) return;
           e.preventDefault();
           // Smooth scroll
           targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
           // Collapse navbar on small screens if open
           var bsCollapseEl = document.querySelector('.navbar-collapse');
           if (bsCollapseEl && bsCollapseEl.classList.contains('show')) {
             var bsCollapse = bootstrap.Collapse.getOrCreateInstance(bsCollapseEl);
             bsCollapse.hide();
           }
           // improve keyboard focus
           targetEl.setAttribute('tabindex', '-1');
           targetEl.focus({ preventScroll: true });
         });
       });

       // Enquiry form handling: validate, show prompt and success banner
       var enquiryForm = document.getElementById('enquiryForm');
       if (enquiryForm) {
         enquiryForm.addEventListener('submit', function (ev) {
           ev.preventDefault();
           // native validity check + report; prevents submit if invalid
           if (!enquiryForm.checkValidity()) {
             enquiryForm.reportValidity();
             return;
           }
           // show inline success banner
           var success = document.getElementById('enquirySuccess');
           success.classList.remove('d-none');
           // also prompt user (browser alert) to confirm send
           try { window.alert('Your enquiry has been sent. We will respond shortly.'); } catch (e) { /* ignore */ }
           // reset form after brief delay
           setTimeout(function () { enquiryForm.reset(); }, 300);
           // auto-hide success after 5s
           setTimeout(function () { success.classList.add('d-none'); }, 5000);
         }, false);
       }

       // Footer subscribe button: simple client-side validation + matching UX (centered)
       var subscribeBtn = document.getElementById('subscribeBtn');
       if (subscribeBtn) {
         subscribeBtn.addEventListener('click', function () {
           var emailInput = document.getElementById('subscribeEmail');
           if (!emailInput) return;
           if (!emailInput.checkValidity()) {
             emailInput.reportValidity();
             return;
           }
           try { window.alert('Thanks — your subscription request has been received.'); } catch (e) {}
           emailInput.value = '';
         });
       }
     })();